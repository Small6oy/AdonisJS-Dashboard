'use strict';

const Lucid = use("Lucid");

class Logs extends Lucid {
    static get table() {
        return 'logs'
    }

}

module.exports = Logs;