import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'vue-ui',
      fileName: 'vue-ui',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      outDir: './dist/types',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    })
  ],
})
