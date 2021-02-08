import Exam from './entity'
import ExamDTO from './interface'

class ExamsRepository {
  private readonly exam: Exam[]

  constructor () {
    this.exam = []
  }

  private findById (id: string): Exam | null {

  }

  public getAll (): Exam[] | null {

  }

  public create ({ name, description, type, questions }: ExamDTO): Exam {
    const exam = new Exam({ name, description, type, questions })

    this.exam.push(exam)

    return exam
  }

  public update (id: string, { name, description, type, questions }: ExamDTO): Exam {
    const exam = new Exam({ name, description, type, questions })

    const data = this.findById(id)

    this.exam.push(exam)

    return exam
  }

  public patch (id: string, { name, description, type, questions }: ExamDTO): Exam {
    const exam = new Exam({ name, description, type, questions })

    const data = this.findById(id)

    this.exam.push(exam)

    return exam
  }

  public delete (id: string): {} {
    const data = this.findById(id)

    this.exam.push({})

    return {}
  }
}

export default ExamsRepository
