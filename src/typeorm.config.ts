import { DataSource } from 'typeorm';
import { Pokemon } from '@/infrastructure/database/pokemon/pokemonRepository/pokemon.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'user',
  password: 'password',
  database: 'my-pokemon-dev',
  entities: [Pokemon],
  synchronize: false,
  migrations: ['src/infrastructure/database/migrations/*.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
