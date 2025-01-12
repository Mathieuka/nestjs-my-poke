import { Pokemon } from '../entities/pokemon';

export interface IPokemonRepository {
  get(): Pokemon;
}
