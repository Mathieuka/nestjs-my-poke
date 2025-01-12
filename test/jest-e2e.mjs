import { pathsToModuleNameMapper } from 'ts-jest';
import tsConfig from '../tsconfig.json' assert { type: 'json' };

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  modulePaths: ['.'],
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: '../',
  }),
};
