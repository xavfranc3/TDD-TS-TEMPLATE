import { getConnection } from 'typeorm';
import { ExampleRepository } from '../repositories/example.repository';

export class ExampleService {
  private exampleRepository: ExampleRepository;

  constructor() {
    this.exampleRepository =
      getConnection().getCustomRepository(ExampleRepository);
  }

  public index = () => {
    return this.exampleRepository.find();
  };
}
