import Option from '../../models/option'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Option)
class OptionsRepository extends Repository<Option> {
}

export default OptionsRepository
