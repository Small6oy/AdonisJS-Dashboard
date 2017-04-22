'use strict';

const User = use('App/Model/User');
const Role = use('App/Model/Role');
const userService = use('App/Services/UserService');

class AuthCtrl {

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
            //TODO return to you are registered page
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
        } else {
            //TODO flash messages
            return response.redirect('/login');
        }
    }

    *
    logout(request, response) {
        yield userService.logout(request.session);
        return response.redirect('/login');
    }

}

module.exports = AuthCtrl;