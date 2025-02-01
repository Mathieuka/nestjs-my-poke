import { Module } from '@nestjs/common';
import { PokemonController } from '../controllers';
import { GetPokemonUseCase } from '@/application/usecases';
import { DatabaseModule } from '@/infrastructure/modules/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '@/infrastructure/database/pokemon/pokemonRepository/pokemon.entity';
import { PokemonRepository } from '@/infrastructure/database/pokemon/pokemonRepository/pokemonRepository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [GetPokemonUseCase, PokemonRepository],
})
export class PokemonModule {}
