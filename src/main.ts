import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Helpers } from './utils/helpers';

async function bootstrap() {
  const helpers = new Helpers();
  const port = helpers.checkIfEnvExist(process.env.PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Nest App running in port ${port}`);
}
bootstrap();
