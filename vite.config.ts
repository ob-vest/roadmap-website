import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  define: {
    "process.env": JSON.stringify(process.env),
    // "process.env.local": JSON.stringify(process.env),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
