import { DataSource } from 'typeorm';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';
import { User } from '@/infrastructure/database/entities/user.entity';

export const dataSourceIntegrationTest = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'user',
  password: 'password',
  database: 'my-pokemon-integration-dev',
  entities: [Pokemon, User],
});
