import { Controller, Get } from '@nestjs/common';
import { GetPokemonUseCase } from '@/application/usecases';

@Controller()
export class PokemonController {
  constructor(private readonly getPokemonUseCase: GetPokemonUseCase) {}

  @Get()
  getPokemon(): any {
    return this.getPokemonUseCase.execute();
  }
}
