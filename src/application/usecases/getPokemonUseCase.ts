import { IPokemon } from '@/core/domain/entities/pokemon';
import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@/infrastructure/repositories/pokemon/pokemonRepository';

@Injectable()
export class GetPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(): Promise<IPokemon> {
    return this.pokemonRepository.get();
  }
}
