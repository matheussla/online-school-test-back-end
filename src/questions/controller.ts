import { Request, Response } from 'express'

import QuestionsService from './service'

export default class QuestionsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { body } = request

    const questionsService = new QuestionsService()

    const result = await questionsService.create(body)

    return response.json(result)
  }

  public async getAll (request: Request, response: Response): Promise<Response> {
    const questionsService = new QuestionsService()

    const result = await questionsService.getAll()

    return response.json(result)
  }
}
