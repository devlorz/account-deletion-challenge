module.exports = {
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/cypress/**',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
}
