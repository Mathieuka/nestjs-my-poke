import { Pokemon } from '@/core/domain/entities/pokemon';
import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@/infrastructure/database/pokemon/pokemonRepository/pokemonRepository';

@Injectable()
export class GetPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  execute(): Pokemon {
    return this.pokemonRepository.get();
  }
}
