import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    await Role.create({ name: 'admin', slug: 'Admin', description: 'Pode tudo, meu patrão' })
    await Permission.create({
      name: 'read-post',
      slug: 'Read post',
      description: 'Alfabetizado. Pode ler as paradas',
    })
  }
}
