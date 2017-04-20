'use strict'

class BaseCtrl {

    *
    show(request, response) {
        console.log("Loading Dashboard")
        yield response.sendView('dash/dash')
    }


}

module.exports = BaseCtrl