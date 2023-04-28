import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

const libName = "index";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: `dist/${libName}.cjs.js`,
      format: "cjs",
    },
    {
      file: `dist/${libName}.es.js`,
      format: "es",
    },
  ],
  plugins: [typescript()],
});
