require("fix-esm").register();

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: './coverage/',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.*\\.(j|t)sx?$': ['@swc/jest'],
  },
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: [],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
