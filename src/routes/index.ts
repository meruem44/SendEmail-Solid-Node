import { Router } from 'express'

import { usersRoutes } from './users.routes'

const routers = Router()

routers.post('/users', usersRoutes)

export { routers }
