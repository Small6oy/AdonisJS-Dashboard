'use strict';

const userService = use('App/Services/UserService');


class Auth {

    *
    handle(request, response, next) {
        yield userService.authenticate(request, response, next);
    };

}

module.exports = Auth;