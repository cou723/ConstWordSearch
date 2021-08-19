module.exports = {
  mode: "development",
  entry: { "docs": "./src/js/app.js" },
  output: {
    path: __dirname + '/docs',
    filename: "bundle.js"
  }
}
