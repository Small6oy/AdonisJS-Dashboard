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
})

//Dash Routes
Route.group('dash', () => {
    // Dash Landing
    Route.get('/', 'Dash/DashCtrl.viewDash')

    //Logout
    Route.get('/logout', 'Auth/AuthCtrl.logout')

    //User Management
    Route.get('/users', 'Dash/UserCtrl.viewUsers')
    Route.get('/user', 'Dash/UserCtrl.viewUser')
    Route.get('/profile', 'Dash/UserCtrl.viewProfile')

    Route.post('/addUser', 'Dash/UserCtrl.addUser')
    Route.post('/updateUser', 'Dash/UserCtrl.updateUser')

    //Log Management    
    Route.get('/logs', 'Dash/LogCtrl.viewLogs')

}).middlewares(['auth']);

//API Routes
Route.group('api', () => {
    Route.get('/getshows', 'API/ShowsCtrl.getshows')
    Route.get('/getsites', 'API/ShowsCtrl.getsites')
    Route.get('/getlive', 'API/ShowsCtrl.getlive')
}).prefix('api/v1')