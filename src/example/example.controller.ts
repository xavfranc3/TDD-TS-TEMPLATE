import { Router, Response, Request } from 'express';
import { ExampleService } from './example.service';

export class ExampleController {
  public router: Router;
  private exampleService: ExampleService;

  constructor() {
    this.router = Router();
    this.exampleService = new ExampleService();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const examples = await this.exampleService.index();
    res.json(examples);
  };

  public routes() {
    this.router.get('/', this.index);
  }
}
