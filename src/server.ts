import "dotenv/config";
import express from "express";
// import bodyParser from "body-parser";
// import * as business from "./business";
import {initAppExpress} from './server/initAppExpress'
const app = express();
const port = process.env.PORT || 3000; 
console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_DATABASE
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

// 2.009s

// app.get("/users/:id/vocabulary/level", async (req, res) => {
//   // console.log(parseInt(req.params.id));
  
//   const userId = business.getNumber(parseInt(req.params.id));
//   const result = await business.getUserVocabularyLevel(userId);
//   res.json(result);

//   const start = Date.now()
	
// 	setTimeout(() => {
// 	  const millis = Date.now() - start;

// 	  console.log(`seconds elapsed = ${millis / 1000}`);
// 	  // expected output: seconds elapsed = 2
// 	}, 2000);
// });

// 2.015

// app.post("/users/word", async (req, res) => {
//   console.log(req.body)
//   const userId = business.getNumber(req.body.id);
//   const word = req.body.word;
//   try {
//     await business.postUserWord(userId, word);
//     res.json(true);
//   } catch (error) {
//     res.json(false);
//   }

//   const start = Date.now()
	
// 	setTimeout(() => {
// 	  const millis = Date.now() - start;

// 	  console.log(`seconds elapsed = ${millis / 1000}`);
// 	  // expected output: seconds elapsed = 2
// 	}, 2000);
// });

app.listen(port, () => {
  initAppExpress(app);
  console.log(`Server running on http://localhost:${port}`);
});
