import { uuid } from 'uuidv4'
import Option from './option/entity'

class Question {
  id: string
  statement: string
  options: Option[]

  constructor (statement: string, options: Option[]) {
    this.id = uuid()
    this.statement = statement
    this.options = options
  }
}
export default Question
