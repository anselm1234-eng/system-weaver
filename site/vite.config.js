import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from GitHub Pages at /system-weaver-skills/ (project site + custom domain).
export default defineConfig({
  base: "/system-weaver-skills/",
  plugins: [react()],
  build: { outDir: "dist", assetsDir: "assets", sourcemap: false },
});
