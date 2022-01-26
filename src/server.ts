import 'dotenv/config';
import express, { Request, Response } from 'express';
import { ExampleController } from './example/example.controller';
import { createConnection } from 'typeorm';

class Server {
  private app: express.Application;
  private exampleController: ExampleController;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 4000);
  }

  public async routes() {
    await createConnection();

    this.exampleController = new ExampleController();

    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World');
    });

    this.app.use('/api/examples', this.exampleController.router);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      // eslint-disable-next-line no-console
      console.log(`Server started on port ${this.app.get('port')}.`);
    });
  }
}

const server = new Server();
server.start();
