import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';
import { User } from '@/infrastructure/database/entities/user.entity';

const testConfig: Partial<TypeOrmModuleOptions> = {
  port: 5435,
  database: 'my-pokemon-integration-dev',
  dropSchema: true,
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'user',
      password: 'password',
      database: 'my-pokemon-dev',
      entities: [Pokemon, User],
      synchronize: false,
      logging: false,
      ...(process.env.NODE_ENV === 'test' ? testConfig : {}),
    }),
  ],
})
export class DatabaseModule {}
