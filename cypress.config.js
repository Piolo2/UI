const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Since this is a simple static HTML file, we don't need a dev server.
    // We'll visit the file directly using a relative path.
    supportFile: false,
  },
});
