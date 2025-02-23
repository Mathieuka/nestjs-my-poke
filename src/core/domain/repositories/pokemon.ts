import { IPokemon } from '../entities/pokemon';

export interface IPokemonRepository {
  get(): Promise<IPokemon>;
  findAll(): Promise<IPokemon[]>;
}
