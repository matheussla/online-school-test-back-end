import Exams from './entity'
import ExamsDTO from './interface'
import ExamsRepository from './repository'

class ExamsService {
  private readonly examRepository: ExamsRepository

  constructor (examRepository: ExamsRepository) {
    this.examRepository = examRepository
  }

  public create (data: ExamsDTO): Exams | {} {
    try {
      const result = this.examRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public getAll (data: ExamsDTO): Exams | {} {
    try {
      const result = this.examRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public update (data: ExamsDTO): Exams | {} {
    try {
      const result = this.examRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public patch (data: ExamsDTO): Exams | {} {
    try {
      const result = this.examRepository.create(data)

      return result
    } catch (error) {
      return {
        statusError: '500',
        errorMessage: error.message
      }
    }
  }

  public delete (data: ExamsDTO): Exams | {} {
    try {
      const result = this.examRepository.create(data)

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
