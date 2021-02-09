import { Router } from 'express'

import ExamsController from './controller'

const examsRouter = Router()
const examsController = new ExamsController()

examsRouter.post('/', examsController.create)

examsRouter.get('/', examsController.getAll)

examsRouter.put('/', examsController.update)

examsRouter.delete('/', examsController.delete)

export default examsRouter
