import { Router } from 'express'

import examsRouter from '../exams/routes'
import questionsRoutes from '../questions/routes'

const routes = Router()

routes.use('/exams', examsRouter)
routes.use('/questions', questionsRoutes)

export default routes
