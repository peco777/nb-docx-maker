import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default defineConfig([
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.exports.require,
        format: "cjs",
      },
      {
        file: pkg.exports.import,
        format: "es",
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "./src/types/index.d.ts",
    output: [{ file: pkg.exports.types, format: "es" }],
    plugins: [dts()],
  },
]);
