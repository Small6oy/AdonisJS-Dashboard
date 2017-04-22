'use strict';

const Lucid = use("Lucid");

class Menu extends Lucid {
    static get table() {
        return 'menu'
    }

}

module.exports = Menu;