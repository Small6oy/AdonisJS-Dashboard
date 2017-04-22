'use strict'

const userService = use('App/Services/UserService');
class DashCtrl {

    *
    viewDash(request, response) {
        return yield response.sendView('dash/dash');
    }


}

module.exports = DashCtrl