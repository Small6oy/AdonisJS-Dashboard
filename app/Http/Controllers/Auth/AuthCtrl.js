'use strict';

const User = use('App/Model/User');
const Role = use('App/Model/Role');
const userService = use('App/Services/UserService');
const encUserSessionKey = use('Encryption').encrypt('user');

class AuthCtrl {

    *
    dashboard(request, response) {

        const user = yield userService.getLoggedInUser(request);

        const view = yield response.view('backoffice/dashboard', {
            user: user,
            roles: user.roles
        });
        response.send(view);
    }

    *
    getAddUser(request, response) {
        var view = yield response.view('backoffice/add_user');
        response.send(view);
    }

    *
    register(request, response) {

        //TODO form validation
        const email = request.input('email');
        const username = request.input('username');
        const password = request.input('password');
        const userRole = request.input('role') ? request.input('role') : 'USER';

        var user = yield userService.register(username, password, email, userRole);
        if (user) {
            return response.redirect('/');
        } else {
            //TODO flash messages

        }
    }

    *
    login(request, response) {

        //TODO form validation
        const username = request.input('username');
        const password = request.input('password');

        var user = yield userService.login(username, password);

        if (user) {
            yield request.session.put('encUserSessionKey', user.id);
            return response.redirect('/');
        }
        return response.redirect('/login');
    }

    *
    logout(request, response) {
        yield userService.logout(request.session);
        return response.redirect('/login');
    }

}

module.exports = AuthCtrl;