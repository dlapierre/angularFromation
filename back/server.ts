import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { Article } from "./../front/src/app/interfaces/article";

const app = express();
const port = 3000;
const dir = "../front/dist/front";

let articles: Article[] = [
  { id: "a1", name: "tournevis", price: 5.99, qty: 120 },
  { id: "a2", name: "marteau", price: 9.99, qty: 130 },
];

app.use(cors());
//to parse body by default
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("url", req.url);
  next();
});

app.delete("/api/articles", (req, response) => {
  const ids = req.body as string[];
  articles = articles.filter((a) => !ids.includes(a.id));
  response.status(204).end();
});

app.get("/api/articles", (req, response) => {
  response.json(articles);
});

app.post("/api/articles", (req, response) => {
  const article = req.body as Article;
  article.id = generateId();
  articles.push(article);
  response.status(201).json(article);
});

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function generateId(): string {
  return Date.now() + "_" + Math.floor(Math.random() * 1e9);
}
