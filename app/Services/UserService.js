'use strict';

const co = use('co');
const Hash = use('Hash');
const Menu = use('App/Model/Menu');
const Role = use('App/Model/Role');
const User = use('App/Model/User');
const View = use('Adonis/Src/View');
const UserDetails = use('App/Model/UserDetails');
const encUserSessionKey = use('Encryption').encrypt('user');

module.exports = {

    register: function*(username, password, email, userRole) {

        const givenUser = yield User.query().where({ username: username }).first();
        if (givenUser) {
            throw 'the username is already taken!';
        }

        const role = yield Role.query().where({ name: userRole }).first();
        if (!role) {
            throw 'the passed role is not acceptable!';
        }

        const new_user = yield User.create({ role_id: role.id, username: username, email: email, password: yield Hash.make(password), is_active: true, created_at: new Date(), updated_at: new Date() })

        const correctUser = yield this.login(username, password);

        if (!correctUser) {
            return null;
        } else {
            return new_user;
        }

    },

    login: function*(username, password) {
        const user = yield User.query().where('username', username).first();

        if (!user) {
            return null;
        } else {
            const correct = yield Hash.verify(password, user.password);
            if (correct) {
                return user;
            } else {
                return null;
            }
        }

    },

    authenticate: function*(request, response, next) {
        const user = yield this.getLoggedInUser(request);

        if (user) {
            //Define Global Variables since you are logged in
            View.global('user', function() {
                return user
            })

            const userDetail = yield this.getUserDetails(user.id);
            View.global('userDetail', function() {
                return userDetail
            })

            const menu = yield this.getUserMenu(user);
            View.global('menu', function() {
                return menu
            })

            const messages = yield this.getUserMessages(user);
            View.global('messages', function() {
                return messages
            })

            yield next;
        } else {
            const view = yield response.view('auth/login');
            response.send(view);
        }
    },

    getLoggedInUser: function*(request) {
        const userId = yield request.session.get('encUserSessionKey');

        if (!userId) {
            console.log('couldn\'t find a user in the session!');
            return null;
        } else {
            const user = yield User.find(userId);

            if (user) {
                return user;
            } else {
                return null;
            }
        }
    },

    getLoggedInUserDetails: function*(request) {
        const user_id = yield request.session.get('encUserSessionKey');
        const user_details = yield this.getUserDetails(user_id);
        return user_details;
    },

    getUserDetails: function*(user_id) {
        const user_details = yield UserDetails.query().where('user_id', user_id).first();
        return user_details;
    },

    getUserMenu: function*(user) {
        const menu = yield Menu.all();
        let user_menu = menu.filter(function(item) {
            return user.role_id >= item.role_level;
        })
        return user_menu;
    },

    getUserMessages: function*(user) {
        let messages = [];
        return messages;
    },

    logout: function*(session) {
        return yield session.forget('encUserSessionKey');
    }
};