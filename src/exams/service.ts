import Exam from '../models/exam'
import ExamDTO from './interface'
import ExamsRepository from './repository'
import { getCustomRepository } from 'typeorm'

class ExamsService {
  private readonly examsRepository = getCustomRepository(ExamsRepository)

  public async create (data: ExamDTO): Promise<Exam | {}> {
    try {
      const result = this.examsRepository.create(data)

      await this.examsRepository.save(result)

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
      const result = await examsRepository.find()

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public update (data: ExamDTO): Exam | {} {
    try {
      const result = this.examsRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public patch (data: ExamDTO): Exam | {} {
    try {
      const result = this.examsRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public delete (data: ExamDTO): Exam | {} {
    try {
      const result = this.examsRepository.create(data)

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
