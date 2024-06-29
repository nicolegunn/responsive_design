import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/responsive_design/", // Adjust this if necessary
  build: {
    outDir: "docs", // Ensure this matches the output directory for deployment
  },
});
