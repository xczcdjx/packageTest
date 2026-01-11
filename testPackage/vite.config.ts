import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: path.join(__dirname, "./src") }],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  server:{
    port:6002,
    watch: {
      // 默认忽略 node_modules；用否定规则把你的包放出来
      ignored: ['!**/node_modules/dynamicformdjx/**'],
    },
  },
  optimizeDeps: {
    exclude: ['dynamicformdjx'],
  },
})
