import path from 'path';
import { fileURLToPath } from 'url';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

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
    alias({
      entries: [{ find: '~', replacement: path.resolve(__dirname) }],
    }),
    json(),
    resolve({ browser: true }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
