import { setSeederFactory } from 'typeorm-extension';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';

export default setSeederFactory(Pokemon, (faker) => {
  const pokemon = new Pokemon();

  pokemon.type = 'Pikachu';
  return pokemon;
});
