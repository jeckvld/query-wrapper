import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'amd'
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm'
    }
  ],
  external: ['react'],
  plugins: [
    resolve({
      extensions: ['.js']
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js']
    })
  ]
};
