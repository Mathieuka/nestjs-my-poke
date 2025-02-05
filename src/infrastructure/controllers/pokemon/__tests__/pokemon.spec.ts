import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/modules/app.module';
import { Pokemon } from '@/infrastructure/database/entities/pokemon.entity';
import { dataSourceIntegrationTest } from '@/test/integration/datasource';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const pokemonRepository = dataSourceIntegrationTest.getRepository(Pokemon);

  beforeEach(async () => {
    await dataSourceIntegrationTest.initialize();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    await pokemonRepository.save({ type: 'Pikachu' });

    await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((response) => response.type === 'Pikachu');

    await pokemonRepository.clear();
  });
});
