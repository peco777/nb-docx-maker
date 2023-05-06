import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default defineConfig([
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./build/index.cjs",
        format: "cjs",
      },
      {
        file: "./build/index.mjs",
        format: "es",
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "./src/types/index.d.ts",
    output: [{ file: "./build/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]);
