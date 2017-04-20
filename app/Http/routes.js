'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
*/

const Route = use('Route')

//Auth
Route.group('auth', () => {
    Route.on('/login').render('auth/login')
    Route.post('/login', 'Auth/AuthCtrl.login')

    Route.on('/register').render('auth/register')
    Route.post('/register', 'Auth/AuthCtrl.register')

    Route.on('/resetPassword').render('auth/resetPassword')
    Route.post('/resetPassword', 'Auth/AuthCtrl.resetPassword')

    Route.get('/logout', 'Auth/AuthCtrl.logout')
})

//Dash Routes
Route.group('dash', () => {
    Route.get('/', 'Dash/BaseCtrl.show')
}).middlewares(['auth']);

//API Routes
Route.group('api', () => {
    Route.get('/getshows', 'API/ShowsCtrl.getshows')
    Route.get('/getsites', 'API/ShowsCtrl.getsites')
    Route.get('/getlive', 'API/ShowsCtrl.getlive')
}).prefix('api/v1')