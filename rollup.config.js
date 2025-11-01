import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/cleanr.min.js',
    format: 'umd',
    name: 'Cleanr',
    sourcemap: true,
    banner: `/*!\n * ${pkg.name} v${pkg.version}\n * ${pkg.description}\n * © ${new Date().getFullYear()} ${pkg.author}\n * Released under the ${pkg.license} License\n * https://github.com/tsusheel/cleanrjs\n */\n`,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
