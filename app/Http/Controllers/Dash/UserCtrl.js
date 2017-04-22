'use strict'

const userService = use('App/Services/UserService');
class UserCtrl {

    *
    viewUsers(request, response) {
        return yield response.sendView('dash/users/viewusers');
    }

    *
    viewUser(request, response) {
        let user = {};
        let userDetails = yield userService.getUserDetails(user.id);
        const view = yield response.view('dash/users/viewuser', {
            userDetails: userDetails
        });
        response.send(view);
    }

    *
    viewProfile(request, response) {
        return yield response.sendView('dash/users/viewuser');
    }

    *
    addUser(request, response) {}

    *
    updateUser(request, response) {}
}

module.exports = UserCtrl