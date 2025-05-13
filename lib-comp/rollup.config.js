import fs from 'fs';
import path from 'path';
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
// import { visualizer } from "rollup-plugin-visualizer";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const components = fs
  .readdirSync(path.resolve(__dirname, 'components'))
  .filter((name) => fs.lstatSync(path.resolve('components', name)).isDirectory());

export default components.map((name) => ({
  input: `components/${name}/index.js`,
  output: [
    {
      file: `dist/${name}/index.js`,
      format: "esm",
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      exports: "named",
      chunkFileNames: '[name]-[hash].js'
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal({includeDependencies: true}),
    alias({
      entries: [
        { find: 'components', replacement: path.resolve(__dirname, 'components') }
      ]
    }),
    resolve(['.js', '.jsx']),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    // visualizer({
    //   emitFile: true,
    //   filename: "stats.html",
    // })
  ],
}));
