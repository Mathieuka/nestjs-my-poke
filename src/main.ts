import { NestFactory } from '@nestjs/core';
import { PokemonModule } from './infrastructure/modules/pokemon.module';

async function bootstrap() {
  const app = await NestFactory.create(PokemonModule);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
