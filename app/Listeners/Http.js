'use strict'

const Env = use('Env')
const Youch = use('youch')
const Http = exports = module.exports = {}

/**
 * handle errors occured during a Http request.
 *
 * @param  {Object} error
 * @param  {Object} request
 * @param  {Object} response
 */
Http.handleError = function*(error, request, response) {
    const status = error.status || 500

    /**
     * DEVELOPMENT REPORTER
     */
    if (Env.get('NODE_ENV') === 'development') {
        const youch = new Youch(error, request.request)
        const type = request.accepts('json', 'html')
        const formatMethod = type === 'json' ? 'toJSON' : 'toHTML'
        const formattedErrors = yield youch[formatMethod]()
        response.status(status).send(formattedErrors)
        return
    }

    /**
     * Custom Error Templates
     */

    if (error.status === 401) {
        yield response.status(401).sendView('errors/401')
        return
    }
    if (error.status === 403) {
        yield response.status(403).sendView('errors/403')
        return
    }
    if (error.status === 404) {
        yield response.status(404).sendView('errors/404')
        return
    }
    if (error.status === 500) {
        yield response.status(500).sendView('errors/500')
        return
    }

    console.error(error.stack)
    yield response.status(status).sendView('errors/index', { error })
}

/**
 * listener for Http.start event, emitted after
 * starting http server.
 */
Http.onStart = function() {}