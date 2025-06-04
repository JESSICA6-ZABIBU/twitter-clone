/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').render('twitter/inscris')
// router.get('/home','#controllers/twitter_controller.homes')
// router.get('/profil','#controllers/twitter_controller.profil')

// router.get('/', '#controllers/short_urls_controller.index')