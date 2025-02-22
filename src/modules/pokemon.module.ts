import { Module } from '@nestjs/common';
import { GetPokemonUseCase } from '@/application/usecases';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';
import { DatabaseModule } from '@/modules/database.module';
import { PokemonController } from '@/infrastructure/controllers';
import { PokemonRepository } from '@/infrastructure/repositories/pokemon/pokemonRepository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [GetPokemonUseCase, PokemonRepository],
})
export class PokemonModule {}
