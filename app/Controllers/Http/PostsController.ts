import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import StoreValidator from 'App/Validators/Post/StoreValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    try {
      const post = await Post.create(data)
      return post
    } catch (error) {
      return response.badRequest({ message: 'Deu ruim na criação', error })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const post = await Post.findOrFail(params.id)
      return post
    } catch (error) {
      return response.notFound({ message: 'Achei não man', error })
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
