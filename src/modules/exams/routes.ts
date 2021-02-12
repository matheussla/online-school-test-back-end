import { Router } from 'express'

import ExamsController from './controller'

const examsRouter = Router()
const examsController = new ExamsController()

examsRouter.post('/', examsController.create)

examsRouter.get('/', examsController.getAll)

examsRouter.get('/:id', examsController.getAll)

examsRouter.put('/:id', examsController.update)

examsRouter.delete('/:id', examsController.delete)

export default examsRouter
