import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from "./package.json";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ],
  root: "src",
  define: {
    "import.meta.env.VERSION": `"${packageJson.version}"`,
  }
});