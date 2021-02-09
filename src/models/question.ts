import Option from './option'
import Exam from './exam'
import {
  Entity, Column,
  PrimaryGeneratedColumn, ManyToOne,
  OneToMany, JoinColumn
} from 'typeorm'

@Entity('questions')
class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Exam, (exam) => exam.id)
  @JoinColumn({ name: 'exam_id' })
  exam_id: string

  @Column()
  statement: string

  @OneToMany(() => Option, (option) => option.question_id)
  options: Option[]
}
export default Question
