import rollupTypeScript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

const externalIds = ['react'];
const env = process.env.NODE_ENV;

export default [
  {
    input: 'src/index.tsx',
    // external(module) {
    //   return externalIds.some(id => id === module);
    // },
    output: {
      file: 'dist/main.js',
      format: 'umd',
      name: 'TaoCom',
      globals: {
        react: 'React'
      }
    },
    plugins: [
      resolve(),
      commonjs(),
      rollupTypeScript(),
      postcss({
        modules: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      env === 'production' && uglify(),
      del({ targets: 'dist/*' })
    ]
  }
];
