import { Request, Response } from 'express'

import OptionsService from './service'

export default class OptionsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { body } = request

    const optionsService = new OptionsService()

    const result = await optionsService.create(body)

    return response.json(result)
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const optionsService = new OptionsService()
    const { id } = request.params

    const result = await optionsService.delete(id)

    return response.json(result)
  }
}
