/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(jpg|jpeg|png|gif|webp|mp4)$': 'jest-transform-file'
  },
  testMatch: ['**/__tests__/**/*.spec.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(ico|eot|otf|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': 'jest-transform-stub'
  },
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: ['.interface.ts', 'index.ts', '.d.ts', 'setupTests.ts'],
  coverageReporters: ['json', 'lcov', ['text', { skipFull: true }]],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  automock: false,
  bail: 1
};
