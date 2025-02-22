import { Controller, Get, Param } from '@nestjs/common';
import { GetPokemonUseCase } from '@/application/usecases';

@Controller()
export class PokemonController {
  constructor(private readonly getPokemonUseCase: GetPokemonUseCase) {}

  @Get('/pokemon/:id')
  getPokemon(@Param('id') id: string): any {
    // console.log('%c LOG id', 'background: #222; color: #bada55', id);
    return this.getPokemonUseCase.execute();
  }
}
