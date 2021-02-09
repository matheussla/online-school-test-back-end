import Question from '../models/question'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Question)
class QuestionsRepository extends Repository<Question> {
}

export default QuestionsRepository
