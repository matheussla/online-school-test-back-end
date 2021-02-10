import { Router } from 'express'

import examsRouter from '../modules/exams/routes'
import questionsRoutes from '../modules/questions/routes'

const routes = Router()

routes.use('/exams', examsRouter)
routes.use('/questions', questionsRoutes)

export default routes
