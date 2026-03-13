import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";
const config:{base?:string}={base:undefined}
if (process.env.NODE_ENV === 'production') {
  config.base='/packageTest/testPackage-react/'
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.join(__dirname, "./src") }],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  server:{
    port:6003
  },
  ...config
})
