import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Konfigurasi untuk build production
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  // Konfigurasi untuk asset/image
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
    "**/*.webp",
  ],
  // Optimasi untuk production
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-icons",
      "framer-motion",
      "sweetalert2",
    ],
  },
  // Server configuration (untuk development)
  server: {
    port: 3000,
    open: true,
  },
  // Preview configuration
  preview: {
    port: 3000,
    open: true,
  },
});
