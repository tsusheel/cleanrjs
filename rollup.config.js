const { terser } = require("rollup-plugin-terser");
const pkg = require("./package.json");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/cleanr.min.js",
    format: "umd",
    name: "CleanrJS",
    banner: `/*!
 * CleanrJS v${pkg.version}
 * Lightweight input masking & validation library
 * © ${new Date().getFullYear()} Sushil Thakur
 * Released under the MIT License
 * https://github.com/tsusheel/cleanrjs
 */`,
  },
  plugins: [
    terser({
      format: { comments: /^!/ },
    }),
  ],
};
