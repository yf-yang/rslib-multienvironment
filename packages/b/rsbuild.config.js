import { defineConfig } from "@rsbuild/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginModuleFederation({
      name: "remote",
      exposes: {
        ".": "./src/index.js",
      },
    }),
  ],
});
