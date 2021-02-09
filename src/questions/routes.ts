import { Router } from 'express'

import QuestionsController from './controller'

const questionsRouter = Router()
const questionsController = new QuestionsController()

questionsRouter.post('/', questionsController.create)

questionsRouter.get('/', questionsController.getAll)

//questionsRouter.put('/', questionsController.create)

//questionsRouter.delete('/', questionsController.getAll)

export default questionsRouter
