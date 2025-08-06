import { NestFactory } from '@nestjs/core';
import { CountrysModule } from './countrys/countrys.module';

async function bootstrap() {
  const app = await NestFactory.create(CountrysModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
