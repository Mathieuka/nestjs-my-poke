import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '@/infrastructure/database/pokemon/pokemonRepository/pokemon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'user',
      password: 'password',
      database: 'my-pokemon-dev',
      entities: [Pokemon],
      synchronize: false,
      migrations: ['src/infrastructure/migrations'],
    }),
  ],
})
export class DatabaseModule {}
