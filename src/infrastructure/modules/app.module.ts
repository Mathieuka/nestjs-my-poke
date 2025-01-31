import { Module } from '@nestjs/common';
import { PokemonModule } from '@/infrastructure/modules/pokemon.module';
import { DatabaseModule } from '@/infrastructure/modules/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PokemonModule, DatabaseModule, ConfigModule.forRoot()],
})
export class AppModule {}
