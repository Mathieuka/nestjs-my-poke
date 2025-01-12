import { IPokemonRepository as IPokemonRepository } from '../../../../core/domain/repositories';
import { Pokemon } from '../../../../core/domain/entities/pokemon';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonRepository implements IPokemonRepository {
  get(): Pokemon {
    return {
      type: 'Pikachu',
    };
  }
}
