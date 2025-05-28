// import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    public async index({ view }: HttpContext) {
        return view.render('twitter/home')
      }
      public async login({ view }: HttpContext) {
        return view.render('pages/login')
      }
}