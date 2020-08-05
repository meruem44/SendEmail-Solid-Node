import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import User from '../../entities/User'

class CreateUserUseCase {
  constructor (
      private usersRepository: IUsersRepository
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExist) {
      throw new Error('User already exist.')
    }

    const user = new User(data)

    await this.usersRepository.save(user)
  }
}

export { CreateUserUseCase }
