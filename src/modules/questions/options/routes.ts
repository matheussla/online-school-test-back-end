import { Router } from 'express'

import OptionsController from './controller'

const optionsRouter = Router()
const optionsController = new OptionsController()

optionsRouter.post('/', optionsController.create)

optionsRouter.delete('/:id', optionsController.delete)

export default optionsRouter
