import { defineConfig } from "@rsbuild/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  environments: {
    a: {
      source: {
        entry: {
          index: "./packages/a/src/index.ts",
        },
      },
      output: {
        distPath: {
          root: "dist/a",
        },
      },
      plugins: [
        pluginModuleFederation({
          name: "remote",
          exposes: {
            ".": "./packages/a/src/index.ts",
          },
        }),
      ],
    },
    b: {
      source: {
        entry: {
          index: "./packages/b/src/index.ts",
        },
      },
      output: {
        target: "web",
        distPath: {
          root: "dist/b",
        },
      },
      plugins: [
        pluginModuleFederation({
          name: "remote",
          exposes: {
            ".": "./packages/b/src/index.ts",
          },
        }),
      ],
    },
  },
  output: {
    minify: false,
  },
});
