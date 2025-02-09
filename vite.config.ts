import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@locales": path.resolve(__dirname, "src/locales"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@router": path.resolve(__dirname, "src/router"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@schema": path.resolve(__dirname, "src/schema"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [react(), tailwindcss()],
});
