// import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  public async home({ view }: HttpContext) {
    return view.render('twitter/home')
  }
  public async profil({ view }: HttpContext) {
    return view.render('twitter/profil')
  }
}
