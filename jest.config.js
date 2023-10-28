// jest.config.ts

export default {
    preset: 'babel-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mock__/fileMock.js',
    },
}
