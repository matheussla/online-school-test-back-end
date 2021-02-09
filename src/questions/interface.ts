import Options from '../models/option'

export default interface QuestionDTO {
  exam_id: string
  statement: string
  options: Options[]
}
