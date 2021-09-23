import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { Article } from "./../front/src/app/interfaces/article";

const app = express();
const port = 3000;
const dir = "../front/dist/front";

var articles: Article[] = [
  { name: "tournevis", price: 5.99, qty: 120 },
  { name: "marteau", price: 9.99, qty: 130 },
];

app.use(cors());

app.use("/", (req, res, next) => {
  console.log("url", req.url);
  next();
});

app.get("/api/articles", (req, response) => {
  response.json(articles);
});
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
