import Question from '../models/question'
import QuestionDTO from './interface'
import QuestionsRepository from './repository'
import ExamsRepository from '../exams/repository'
import { getCustomRepository } from 'typeorm'

class QuestionsService {
  public async create (data: QuestionDTO): Promise<Question | {}> {
    try {
      const questionsRepository = getCustomRepository(QuestionsRepository)
      const examsRepository = getCustomRepository(ExamsRepository)
      
      const verifyExam = await examsRepository.findOne(data.exam_id)

      if(!verifyExam){
        throw new Error("Not Found exam_id");
      }
      
      const result = questionsRepository.create(data)
      
      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public async getAll (): Promise<Question | {}> {
    try {
      const questionsRepository = getCustomRepository(QuestionsRepository)
      let result = await questionsRepository
      .createQueryBuilder("questions")
      .leftJoinAndSelect("questions.options", "options.question_id")
      .getMany()
      
      result = result.sort(() => Math.random() - 0.5)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public async update (id: string , data: QuestionDTO): Promise<Question | {}> {
    try {
      const questionsRepository = getCustomRepository(QuestionsRepository)
      const result = await questionsRepository.update(id, data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public delete (id: string): Question | {} {
    try {
      const questionsRepository = getCustomRepository(QuestionsRepository)
      const result = questionsRepository.delete(id)

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
