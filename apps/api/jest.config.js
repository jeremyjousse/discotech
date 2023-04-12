module.exports = async () => {
  return {
    verbose: true,
    collectCoverageFrom: [
      'src/**/*.(t|j)s',
      '!src/main.(t|j)s',
      '!src/**/*.entity.(t|j)s',
      '!src/**/*.entities.(t|j)s',
      '!src/**/*.module.(t|j)s',
      '!src/**/node_modules/**',
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePaths: ['<rootDir>'],
    testMatch: [
      '**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)',
      // '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    setupFiles: ['<rootDir>/src/__tests__/dotenv-config.ts'],
  };
};
