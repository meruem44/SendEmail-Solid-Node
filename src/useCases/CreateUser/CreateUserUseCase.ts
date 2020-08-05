import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import User from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'

class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,

    private mailProvider: IMailProvider
  ) { }

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExist) {
      throw new Error('User already exist.')
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com'
      },
      subject: 'Seja bem-vindo á plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma </p>'
    })
  }
}

export { CreateUserUseCase }
