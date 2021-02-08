import { uuid } from 'uuidv4'
import Questions from '../questions/entity'
import ExamType from './enum'

class Exam {
  id: string
  name: string
  description: string
  type: ExamType
  questions: Questions[]

  constructor ({
    name, description,
    type, questions
  }: Omit<Exam, 'id'>) {
    this.id = uuid()
    this.name = name
    this.description = description
    this.type = type
    this.questions = questions
  }
}
export default Exam
