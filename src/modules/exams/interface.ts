import Questions from '../../models/question'
import ExamType from './enum'

export default interface ExamDTO {
  name: string
  description: string
  type: ExamType
  questions: Questions[]
}
