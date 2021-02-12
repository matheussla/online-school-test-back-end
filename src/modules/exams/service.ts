import Exam from '../../models/exam'
import ExamDTO from './interface'
import ExamsRepository from './repository'
import { getCustomRepository } from 'typeorm'

class ExamsService {
  public async create (data: ExamDTO): Promise<Exam | {}> {
    try {
      const examsRepository = getCustomRepository(ExamsRepository)
      const result = examsRepository.create(data)

      await examsRepository.save(result)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public async getAll (): Promise<Exam | {}> {
    try {
      const examsRepository = getCustomRepository(ExamsRepository)
      const result = await examsRepository
        .createQueryBuilder('exams')
        .leftJoinAndSelect('exams.questions', 'questions.exam_id')
        .getMany()

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public async getById (id: string): Promise<Exam | {}> {
    try {
      const examsRepository = getCustomRepository(ExamsRepository)
      const result = await examsRepository
        .createQueryBuilder('exams')
        .leftJoinAndSelect('exams.questions', 'questions.exam_id')
        .where(id)
        .getMany()

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public async update (id: string, data: ExamDTO): Promise<Exam | {}> {
    try {
      const examsRepository = getCustomRepository(ExamsRepository)
      const result = examsRepository.update(id, data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public async delete (id: string): Promise<Exam | {}> {
    try {
      const examsRepository = getCustomRepository(ExamsRepository)

      const verifyId = await examsRepository.findOne(id)

      if (!verifyId) {
        throw new Error('Not Found id')
      }

      const result = await examsRepository.delete(id)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }
}

export default ExamsService
