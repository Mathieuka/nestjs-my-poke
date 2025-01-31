import { Module } from '@nestjs/common';
import { PokemonController } from '../controllers';
import { GetPokemonUseCase } from '@/application/usecases';
import { PokemonRepository } from '../database/pokemon/pokemonRepository/pokemonRepository';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [GetPokemonUseCase, PokemonRepository],
})
export class PokemonModule {}
