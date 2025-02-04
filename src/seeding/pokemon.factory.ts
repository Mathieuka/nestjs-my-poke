// src/infrastructure/database/factories/pokemon.factory.ts
import { setSeederFactory } from 'typeorm-extension';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';

export default setSeederFactory(Pokemon, (faker) => {
  console.log('%c LOG setSeederFactory', 'background: #222; color: #bada55');
  const pokemon = new Pokemon();
  pokemon.type = 'toto';
  // Set other properties
  return pokemon;
});
