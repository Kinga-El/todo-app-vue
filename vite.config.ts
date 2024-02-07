import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-list",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "./target/classes/static"),
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
         additionalData: `@import "@/core/css/base-imports.scss";`
      },
    },
  },
});