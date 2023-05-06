import * as fs from "fs";
import { exportBuffer } from "../build/index.cjs";
import mockParams from "./data";

const result = exportBuffer(mockParams);

if (result) {
  result.then((buffer: Buffer | Blob) => {
    fs.writeFileSync("demo/hello.docx", buffer as Buffer);
  });
}
