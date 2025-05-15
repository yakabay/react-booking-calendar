import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@use \"/src/styles/_variables.scss\" as *;\n",
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@shared": resolve(__dirname, "./src/shared"),
            "@components": resolve(__dirname, "./src/components"),
            "@store": resolve(__dirname, "./src/store"),
            "@styles": resolve(__dirname, "./src/styles"),
        },
    },
});
