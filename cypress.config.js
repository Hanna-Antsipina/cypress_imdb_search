const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  pageLoadTimeout: 200000,
  e2e: {
    
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.imdb.com/',

    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
