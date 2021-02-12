/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Service from '../service'
import Question from '../../../models/question'
import QuestionDTO from '../interface'
import { uuid } from 'uuidv4'

describe('Questions service tests', () => {
  const service = new Service()

  test('should getAll', async () => {
    const response = new Question()

    response.id = '1234'
    response.exam_id = '4321'
    response.statement = 'teste'
    response.options = []

    jest.spyOn(service, 'getAll').mockImplementation(async () => response)

    const result = await service.getAll()
    expect(result).toEqual({ id: '1234', exam_id: '4321', statement: 'teste', options: [] })
  })

  test('should post', async () => {
    const object: QuestionDTO = { exam_id: '4321', statement: 'teste', options: [] }
    const response = new Question()

    response.id = '1234'
    response.exam_id = '4321'
    response.statement = 'teste'
    response.options = []

    jest.spyOn(service, 'create').mockImplementation(async () => response)

    const result = await service.create(object)
    expect(result).toEqual({ id: '1234', exam_id: '4321', statement: 'teste', options: [] })
  })

  test('should delete', async () => {
    const id = uuid()

    const response = new Question()

    response.id = '1234'
    response.exam_id = '4321'
    response.statement = 'teste'
    response.options = []

    jest.spyOn(service, 'delete').mockImplementation(async () => response)

    const result = await service.delete(id)
    expect(result).toEqual({ id: '1234', exam_id: '4321', statement: 'teste', options: [] })
  })
})
