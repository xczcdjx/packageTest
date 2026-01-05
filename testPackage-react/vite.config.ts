import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.join(__dirname, "./src") }],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
})
