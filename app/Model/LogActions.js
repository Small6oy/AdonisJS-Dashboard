'use strict';

const Lucid = use("Lucid");

class Logs extends Lucid {
    static get table() {
        return 'log_actions'
    }

}

module.exports = LogActions;