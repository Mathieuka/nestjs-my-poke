import { Module } from '@nestjs/common';
import { PokemonController } from '../controllers';
import { GetPokemonUseCase } from '@/application/usecases';
import { PokemonRepository } from '../database/pokemon/pokemonRepository/pokemonRepository';
import { DatabaseModule } from '@/infrastructure/modules/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([PokemonRepository])],
  controllers: [PokemonController],
  providers: [GetPokemonUseCase, PokemonRepository],
})
export class PokemonModule {}
