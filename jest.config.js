const config = {
  preset: 'ts-jest',
  silent: true,
  clearMocks: true,
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './test-reports/junit' }],
  ],
  coverageDirectory: './test-reports/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/', 'locales'],
  collectCoverageFrom: ['**/*.ts'],
  coverageReporters: ['text', 'cobertura', 'lcov'],
};

module.exports = config