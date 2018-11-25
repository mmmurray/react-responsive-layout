const baseConfig = require('mmm-scripts/jest.config')

module.exports = {
  ...baseConfig,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}
