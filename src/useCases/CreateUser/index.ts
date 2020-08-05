import { MailtrapProvider } from '../../providers/implementations/MailtrapProvider'
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const mailtrapMailProvider = new MailtrapProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserCase
)

export { createUserCase, createUserController }
