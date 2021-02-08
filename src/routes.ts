import { Router } from 'express'

const routes = Router()

routes.get('/health', (req, res) => res.status(204).send())

routes.get('/questions', (req, res) => res.status(204).send())

routes.get('/exams', (req, res) => res.status(204).send())

export default routes
