import Question from '../models/question'
import QuestionDTO from './interface'
import QuestionsRepository from './repository'
import { getCustomRepository } from 'typeorm'

class QuestionsService {
  private readonly questionsRepository = getCustomRepository(QuestionsRepository)

  public async create (data: QuestionDTO): Promise<Question | {}> {
    try {
      const result = this.questionsRepository.create(data)

      await this.questionsRepository.save(result)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public getAll (): Question | {} {
    try {
      const result = this.questionsRepository.create()

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public update (data: QuestionDTO): Question | {} {
    try {
      const result = this.questionsRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public patch (data: QuestionDTO): Question | {} {
    try {
      const result = this.questionsRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public delete (data: QuestionDTO): Question | {} {
    try {
      const result = this.questionsRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }
}

export default QuestionsService
