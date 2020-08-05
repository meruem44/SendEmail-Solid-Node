import { Router } from 'express'
import { createUserController } from '../useCases/CreateUser'

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response)
})

export { usersRoutes }
