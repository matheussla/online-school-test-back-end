/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Service from '../service'
import Option from '../../../../models/option'
import OptionDTO from '../interface'
import { uuid } from 'uuidv4'

describe('Options service tests', () => {
  const service = new Service()

  test('should post', async () => {
    const object: OptionDTO = { question_id: '4321', key: 'a', value: 'teste', correct: true }
    const response = new Option()

    response.id = '1234'
    response.question_id = '4321'
    response.key = 'a'
    response.value = 'teste'
    response.correct = true

    jest.spyOn(service, 'create').mockImplementation(async () => response)

    const result = await service.create(object)
    expect(result).toEqual({ id: '1234', question_id: '4321', key: 'a', value: 'teste', correct: true })
  })

  test('should delete', async () => {
    const id = uuid()

    const response = new Option()

    response.id = '1234'
    response.question_id = '4321'
    response.key = 'a'
    response.value = 'teste'
    response.correct = true

    jest.spyOn(service, 'delete').mockImplementation(async () => response)

    const result = await service.delete(id)
    expect(result).toEqual({ id: '1234', question_id: '4321', key: 'a', value: 'teste', correct: true })
  })
})
