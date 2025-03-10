import { defineConfig } from "@rsbuild/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  environments: {
    a: {
      source: {
        entry: {
          index: "src/index.ts",
        },
        tsconfigPath: "./packages/a/tsconfig.json",
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
            ".": "src/index.ts",
          },
        }),
      ],
    },
    b: {
      source: {
        entry: {
          index: "./packages/b/src/index.ts",
        },
        tsconfigPath: "./packages/b/tsconfig.json",
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
