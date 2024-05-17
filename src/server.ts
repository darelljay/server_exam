import "dotenv/config";
import express from "express";

import {initAppExpress} from './server/initAppExpress'
const app = express();
const port = process.env.PORT || 3000; 
console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_DATABASE
});


app.listen(port, () => {
  initAppExpress(app);
  console.log(`Server running on http://localhost:${port}`);
});
