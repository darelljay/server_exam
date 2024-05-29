import "dotenv/config";
import express from "express";

import {initAppExpress} from './server/initAppExpress'
const app = express();
const port = process.env.PORT || 3000; 


app.listen(port, () => {
  initAppExpress(app);
  console.log(`Server running on http://localhost:${port}`);
});
