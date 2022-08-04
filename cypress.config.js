const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://alitahayurdakul.github.io/my-blog-website/#",
    viewportWidth: 1200,
    viewportHeight: 768
  },
});
