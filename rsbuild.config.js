import { defineConfig } from "@rsbuild/core";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  environments: {
    a: {
      source: {
        entry: {
          index: "./packages/a/src/index.ts",
        },
        tsconfigPath: "./packages/a/tsconfig.json",
      },
      output: {
        distPath: {
          root: "dist/a",
        },
      },
      tools: {
        rspack: {
          plugins: [
            new ModuleFederationPlugin({
              name: "remote",
            }),
          ],
        },
      },
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
      tools: {
        rspack: {
          plugins: [
            new ModuleFederationPlugin({
              name: "remote",
              exposes: {
                ".": "./packages/b/src/index.ts",
              },
            }),
          ],
        },
      },
    },
  },
  output: {
    minify: false,
  },
});