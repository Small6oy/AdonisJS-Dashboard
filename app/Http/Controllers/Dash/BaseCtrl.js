'use strict'

const userService = use('App/Services/UserService');
class BaseCtrl {

    *
    show(request, response) {
        console.log("Loading Dashboard")
        const user = yield userService.getLoggedInUser(request);
        const view = yield response.view('dash/dash', {
            user: user
        });
        response.send(view);
    }


}

module.exports = BaseCtrl