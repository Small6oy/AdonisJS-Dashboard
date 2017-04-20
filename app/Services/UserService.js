'use strict';

const co = use('co');
const User = use('App/Model/User');
const Role = use('App/Model/Role');
const Hash = use('Hash');
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
            yield next;
        } else {
            response.statusCode = 401;
            const view = yield response.view('401');
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
            console.log(user)

            if (user) {
                return user;
            } else {
                return null;
            }
        }
    },

    logout: function*(session) {
        return yield session.forget(encUserSessionKey);
    }
};