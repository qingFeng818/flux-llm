import { defineConfig,loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

import pkg from './package.json';

/**
 * vite config
 * @see https://vitejs.dev/
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(),'');
  return {
  plugins: [
    checker({typescript: true}),
    externalizeDeps(),
    dts({
      outDir: './dist-types',
    }),
  ],
  define: {
    'process.env.PKG_NAME': JSON.stringify(pkg.name),
    'process.env.PKG_VERSION': JSON.stringify(pkg.version),

    // 百度飞浆
    "process.env.EB_API_KEY": JSON.stringify(env.EB_API_KEY),
    // 通义千问
    "process.env.QWEN_API_KEY": JSON.stringify(env.QWEN_API_KEY),
    // 讯飞星火
    "process.env.SPARK_APP_ID": JSON.stringify(env.SPARK_APP_ID),
    "process.env.SPARK_API_KEY": JSON.stringify(env.SPARK_API_KEY),
    "process.env.SPARK_API_SECRET": JSON.stringify(env.SPARK_API_SECRET),
    // 腾讯混元
    "process.env.HUNYUAN_APP_ID": JSON.stringify(env.HUNYUAN_APP_ID),
    "process.env.HUNYUAN_SECRET_ID": JSON.stringify(env.HUNYUAN_SECRET_ID),
    "process.env.HUNYUAN_SECRET_KEY": JSON.stringify(env.HUNYUAN_SECRET_KEY),
    // Imagine Art
    "process.env.VYRO_API_KEY": JSON.stringify(env.VYRO_API_KEY),
    // Minimax
    "process.env.MINIMAX_API_ORG": JSON.stringify(env.MINIMAX_API_ORG),
    "process.env.MINIMAX_API_KEY": JSON.stringify(env.MINIMAX_API_KEY),
    // Google Gemini AI
    "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
  },
  resolve: {
    alias: {
      '@/': './src',
    },
  },
  build: {
    sourcemap: false,
    copyPublicDir: false,
    reportCompressedSize: false,
    lib: {
      entry: {
        index: './src/index.ts',
        'shims/node': './src/shims/node.ts',
      },
    },
    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist',
          exports: 'named',
          entryFileNames: '[name].mjs',
          chunkFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          dir: 'dist',
          exports: 'named',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name].cjs',
        },
      ],
    },
  },
}
});
