import { Module } from '@nestjs/common';
import { PokemonModule } from '@/infrastructure/modules/pokemon.module';
import { DatabaseModule } from '@/infrastructure/modules/database.module';
// import { DataSource } from 'typeorm';

@Module({
  imports: [PokemonModule, DatabaseModule],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
  constructor() {}
}
