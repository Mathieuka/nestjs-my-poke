import { IPokemonRepository } from '@/core/domain/repositories';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';

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
      throw new Error('Pokemon not found');
    }

    return response;
  }
}
