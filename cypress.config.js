const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7qi167',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
