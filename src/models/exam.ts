import Question from './question'
import ExamType from '../modules/exams/enum'
import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn, OneToMany
} from 'typeorm'

@Entity('exams')
class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column({
    type: 'enum',
    enum: ExamType,
    default: ExamType.ONLINE
  })
  type: ExamType

  @OneToMany(() => Question, (question) => question.exam_id)
  questions: Question[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date
}
export default Exam
