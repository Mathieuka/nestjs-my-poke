import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { PokemonModule } from './infrastructure/modules/pokemon.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(PokemonModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
