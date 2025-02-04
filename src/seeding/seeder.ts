// src/infrastructure/database/seeds/pokemon.seeder.ts
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';

export default class PokemonSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // const repository = dataSource.getRepository(Pokemon);
    // await repository.save({ type: 'Pikachu' });
    const factory = factoryManager.get(Pokemon);
    const pokemons = await factory.saveMany(10);
    console.log(`Created ${pokemons.length} pokemons`);
  }
}
