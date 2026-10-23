const { defineConfig } = require('vite');

module.exports = defineConfig({
  root: 'src',
  publicDir: '../imagens',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});