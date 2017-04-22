'use strict';

const Lucid = use("Lucid");

class UserDetails extends Lucid {
    static get table() {
        return 'user_details'
    }

}

module.exports = UserDetails;