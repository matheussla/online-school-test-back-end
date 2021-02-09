import { Router } from 'express'

import QuestionsController from './controller'

const questionsRouter = Router()
const questionsController = new QuestionsController()

questionsRouter.post('/', questionsController.create)

questionsRouter.get('/', questionsController.getAll)

questionsRouter.put('/', questionsController.update)

questionsRouter.delete('/', questionsController.delete)

export default questionsRouter
