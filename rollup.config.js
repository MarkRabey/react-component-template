import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import cleanup from 'rollup-plugin-cleanup';
import autoExternal from 'rollup-plugin-auto-external';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    del({targets: 'lib/*'}),
    autoExternal(),
    typescript(),
    commonjs(),
    cleanup({extensions: ['js', 'ts', 'jsx', 'tsx', 'tag']}),
  ],
};
