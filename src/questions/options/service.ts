import Option from '../../models/option'
import OptionDTO from './interface'
import QuestionsRepository from '../../questions/repository'
import OptionsRepository from './repository'
import { getCustomRepository } from 'typeorm'

class OptionsService {
  public async create (data: OptionDTO): Promise<Option | {}> {
    try {
      const questionsRepository = getCustomRepository(QuestionsRepository)
      const optionsRepository = getCustomRepository(OptionsRepository)

      const verifyExam = await questionsRepository.findOne(data.question_id)

      if (!verifyExam) {
        throw new Error('Not Found exam_id')
      }

      const result = optionsRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public delete (id: string): Option | {} {
    try {
      const questionsRepository = getCustomRepository(OptionsRepository)

      const verifyId = questionsRepository.findOne(id)

      if (!verifyId) {
        throw new Error('Not Found id')
      }

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

export default OptionsService
