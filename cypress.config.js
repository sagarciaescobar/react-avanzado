const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  },

  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://petgram-sagarcia-npt2gnnf7-sagarciaescobar.vercel.app/'
  },
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800
})
