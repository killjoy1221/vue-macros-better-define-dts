import { defineConfig } from "vite";
import VueMacros from "unplugin-vue-macros/vite";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Vue()
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),
  ],
});
