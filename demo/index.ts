import * as fs from "fs";
import { exportBuffer } from "../dist/index.cjs";
import mockParams from "./data";

exportBuffer(mockParams)?.then((buffer) => {
  fs.writeFileSync("demo/hello.docx", buffer as Buffer);
});
