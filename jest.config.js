/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'], // Specify where your test files are located
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for .ts and .tsx files
    },
  };
  