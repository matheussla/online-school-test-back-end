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

  public async getById (request: Request, response: Response): Promise<Response> {
    const examsService = new ExamsService()
    const { id } = request.params

    const result = await examsService.getById(id)

    return response.json(result)
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const examsService = new ExamsService()
    const { body } = request
    const { id } = request.params

    const result = await examsService.update(id, body)

    return response.json(result)
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const examsService = new ExamsService()
    const { id } = request.params

    const result = await examsService.delete(id)

    return response.json(result)
  }
}
