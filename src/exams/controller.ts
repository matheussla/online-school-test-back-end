import { Request, Response } from 'express'

import ExamsService from './service'

export default class ExamsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { body } = request

    const examsService = new ExamsService()

    const result = await examsService.create(body)

    return response.json(result)
  }

  public async getAll (request: Request, response: Response): Promise<Response> {
    const examsService = new ExamsService()

    const result = await examsService.getAll()

    return response.json(result)
  }
}
