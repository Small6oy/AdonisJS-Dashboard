'use strict';

const Lucid = use("Lucid");

class Role extends Lucid {
    static get table() {
        return 'roles'
    }
}

module.exports = Role;