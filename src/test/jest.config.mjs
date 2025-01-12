// import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
// import tsConfig from '../../tsconfig.json' assert { type: 'json' };

const paths = {
  // '@/src/*': ['..'],
  '@/application/*': ['./application/*'],
  '@/core/*': ['./core/*'],
  '@/infrastructure/*': ['./infrastructure/*'],
};

const config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
};

export default config;
