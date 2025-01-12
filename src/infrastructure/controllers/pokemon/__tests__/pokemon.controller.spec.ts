import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from '../pokemon.controller';
import { PokemonRepository } from '@/infrastructure/database/pokemon/pokemonRepository/pokemonRepository';
import { GetPokemonUseCase } from '@/application/usecases';
// import { PokemonRepository } from '../../../database/pokemon/pokemonRepository/pokemonRepository';

describe('PokemonController', () => {
  let pokemonController: PokemonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [GetPokemonUseCase, PokemonRepository],
    }).compile();

    pokemonController = app.get<PokemonController>(PokemonController);
  });

  describe('Root', () => {
    it('Should return pokemon of type pikachu', async () => {
      expect(pokemonController.getPokemon()).toEqual({
        type: 'Pikachu',
      });
    });
  });
});
