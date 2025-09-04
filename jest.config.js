/* eslint-disable no-undef */
/**
 * @type {import('ts-jest').JestConfigWithTsJest}
 * Type annotation for Jest config with ts-jest
 */
module.exports = {
  preset: "ts-jest", // Use ts-jest preset for TypeScript support
  testEnvironment: "node", // Set the test environment to Node.js
  testMatch: ["**/tests/**/*.test.ts"], // Only run test files matching this pattern
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/*.d.ts", // Ignorer les fichiers de type *.d.ts
    "!src/**/*.test.{ts,js}", // Ignorer les fichiers de tests eux-mêmes
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      // branches: 80,
      // functions: 80,
      lines: 50,
      statements: 50,
    },
  },
};
