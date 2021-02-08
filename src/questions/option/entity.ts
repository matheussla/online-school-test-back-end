import { uuid } from 'uuidv4'

class Option {
  id: string
  key: string
  value: string
  correct: boolean

  constructor (key: string, value: string, correct: boolean) {
    this.id = uuid()
    this.key = key
    this.value = value
    this.correct = correct
  }
}
export default Option
