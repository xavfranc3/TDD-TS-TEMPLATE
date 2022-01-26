import { EntityRepository, Repository } from 'typeorm';
import { ExampleEntity } from '../entities/example';

@EntityRepository(ExampleEntity)
export class ExampleRepository extends Repository<ExampleEntity> {}
