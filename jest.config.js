/* eslint-disable import/no-commonjs, import/unambiguous */
module.exports = {
    preset:            'ts-jest',
    testEnvironment:   'node',
    clearMocks:        true,
    collectCoverage:   true,
    coverageReporters: [
        'json',
        'lcov',
        'clover',
        'cobertura',
        'text',
    ],
    coverageDirectory: 'jest-reports/cobertura',
    testRegex:         [
        `${__dirname}(/src/(.*/)?__tests__/.*|/(test|src)/(.*/)?.*\\.(test|spec))\\.[jt]sx?$`,
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    watchPathIgnorePatterns: [
        '/node_modules/',
    ],
    reporters: [
        'default', [
            'jest-junit', {
                outputDirectory: 'jest-reports/junit',
            },
        ],
    ],
};
