'use strict';

const Lucid = use("Lucid");

class User extends Lucid {
    static get table() {
        return 'users'
    }

}

module.exports = User;