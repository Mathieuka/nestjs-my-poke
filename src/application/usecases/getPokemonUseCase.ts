import { IPokemon } from '@/core/domain/entities/pokemon';
import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@/infrastructure/database/repositories/pokemon/pokemonRepository';

@Injectable()
export class GetPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(): Promise<IPokemon> {
    const response = await this.pokemonRepository.get();

    if (!response) {
      return {
        type: 'Pikachu',
      };
    }

    return response;
  }
}
