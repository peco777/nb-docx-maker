```
npm install nb-docx-maker
```

### frontend

```js
import { exportBuffer } from "nb-docx-maker";
import { saveAs } from "file-saver";

const p = exportBuffer(data);

p.then((blob: Blob) => {
  saveAs(blob, "hello word.docx");
});
```

### node

```js
const fs = require("fs");
const { exportBuffer } = require("nb-docx-maker");

const data = require("./data");

exportBuffer(data)
  .then((buffer) => {
    fs.writeFileSync("hello word.docx", buffer);
  })
  .catch((error) => {
    console.log("error", error);
  });
```
