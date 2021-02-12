import { Router } from 'express'

import QuestionsController from './controller'

const questionsRouter = Router()
const questionsController = new QuestionsController()

questionsRouter.post('/', questionsController.create)

questionsRouter.get('/', questionsController.getAll)

questionsRouter.put('/:id', questionsController.update)

questionsRouter.delete('/:id', questionsController.delete)

export default questionsRouter
