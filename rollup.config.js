import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs'
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm'
    }
  ],
  external: ['react'],
  plugins: [
    typescript(),
    resolve({
      extensions: ['.ts', '.tsx']
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx']
    }),
  ]
};
