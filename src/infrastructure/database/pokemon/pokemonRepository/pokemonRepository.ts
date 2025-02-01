import { IPokemonRepository } from '@/core/domain/repositories';
import { Injectable } from '@nestjs/common';
import { Pokemon } from '@/infrastructure/database/pokemon/pokemonRepository/pokemon.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PokemonRepository implements IPokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async get() {
    const response = await this.pokemonRepository.findOne({
      where: { type: 'Pikachu' },
    });

    if (!response) {
      return {
        type: 'Pikachu',
      };
    }

    return response;
  }
}
