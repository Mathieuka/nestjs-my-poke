import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';
import { User } from '@/infrastructure/database/entities/user.entity';
import * as path from 'node:path';
import * as fs from 'node:fs';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'user',
  password: 'password',
  database: 'my-pokemon-dev',
  entities: [Pokemon, User],
  // synchronize: false,
  // migrationsRun: false,
  seedTracking: false,
  factories: [path.join(__dirname, 'pokemon.factory.ts')],
  seeds: [path.join(__dirname, 'seeder.ts')],
};

const AppDataSource = new DataSource(options);

const seedPath = path.join(__dirname, 'seeder.ts');
const factoryPath = path.join(__dirname, 'pokemon.factory.ts');

if (!fs.existsSync(seedPath) || !fs.existsSync(factoryPath)) {
  console.error('Seed or factory file not found!');
  process.exit(1);
}

AppDataSource.initialize()
  .then(async () => {
    console.log('DataSource initialized');
    try {
      console.log('Starting seeding process');
      await runSeeders(AppDataSource);
      console.log('Seeding completed successfully');
    } catch (error) {
      console.error('Error during seeding:', error);
    }
  })
  .catch((error) => console.error('Error initializing DataSource:', error));

export default AppDataSource;
