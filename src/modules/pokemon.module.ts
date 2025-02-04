import { Module } from '@nestjs/common';
import { GetPokemonUseCase } from '@/application/usecases';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';
import { PokemonRepository } from '@/infrastructure/database/repositories/pokemon/pokemonRepository';
import { DatabaseModule } from '@/modules/database.module';
import { PokemonController } from '@/infrastructure/controllers';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [GetPokemonUseCase, PokemonRepository],
})
export class PokemonModule {}
