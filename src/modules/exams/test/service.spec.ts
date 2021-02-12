/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Service from '../service'
import Exam from '../../../models/exam'
import ExamType from '../enum'
import ExamDTO from '../interface'
import { uuid } from 'uuidv4'

describe('Exams service tests', () => {
  const service = new Service()

  test('should getAll', async () => {
    const response = new Exam()

    response.id = '1234'
    response.name = 'prova de geografia'
    response.description = 'Vale 10'
    response.type = ExamType.ONLINE

    jest.spyOn(service, 'getAll').mockImplementation(async () => response)

    const result = await service.getAll()
    expect(result).toEqual({ id: '1234', name: 'prova de geografia', description: 'Vale 10', type: ExamType.ONLINE })
  })

  test('should post', async () => {
    const object: ExamDTO = { name: 'prova de geografia', description: 'Vale 10', type: ExamType.ONLINE, questions: [] }
    const response = new Exam()

    response.id = '1234'
    response.name = 'prova de geografia'
    response.description = 'Vale 10'
    response.type = ExamType.ONLINE

    jest.spyOn(service, 'create').mockImplementation(async () => response)

    const result = await service.create(object)
    expect(result).toEqual({ id: '1234', name: 'prova de geografia', description: 'Vale 10', type: ExamType.ONLINE })
  })

  test('should delete', async () => {
    const response = new Exam()
    const id = uuid()

    response.id = '1234'
    response.name = 'prova de geografia'
    response.description = 'Vale 10'
    response.type = ExamType.ONLINE

    jest.spyOn(service, 'delete').mockImplementation(async () => response)

    const result = await service.delete(id)
    expect(result).toEqual({ id: '1234', name: 'prova de geografia', description: 'Vale 10', type: ExamType.ONLINE })
  })
})
