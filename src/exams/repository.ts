import Exam from '../models/exam'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Exam)
class ExamsRepository extends Repository<Exam> {
}

export default ExamsRepository
