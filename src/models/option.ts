import Question from './question'
import {
  Entity, Column,
  PrimaryGeneratedColumn, ManyToOne,
  JoinColumn
} from 'typeorm'

@Entity('options')
class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Question, (question) => question.id)
  @JoinColumn({ name: 'question_id' })
  question_id: string

  @Column()
  key: string

  @Column()
  value: string

  @Column()
  correct: boolean
}
export default Option
