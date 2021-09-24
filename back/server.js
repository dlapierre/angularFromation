"use strict";
exports.__esModule = true;
var cors_1 = require("cors");
var express_1 = require("express");
var path_1 = require("path");
var serve_index_1 = require("serve-index");
var app = (0, express_1["default"])();
//conf variable environnement
var port = process.env.port || 3000;
var dir = (0, path_1.resolve)(process.cwd(), "../front/dist/front");
var articles = [
    { id: "a1", name: "tournevis", price: 5.99, qty: 120 },
    { id: "a2", name: "marteau", price: 9.99, qty: 130 },
];
app.use((0, cors_1["default"])());
//to parse body by default
app.use(express_1["default"].json());
app.use("/", function (req, res, next) {
    console.log("url", req.url);
    next();
});
app["delete"]("/api/articles", function (req, response) {
    var ids = req.body;
    articles = articles.filter(function (a) { return !ids.includes(a.id); });
    response.status(204).end();
});
app.get("/api/articles", function (req, response) {
    response.json(articles);
});
app.post("/api/articles", function (req, response) {
    var article = req.body;
    article.id = generateId();
    articles.push(article);
    response.status(201).json(article);
});
app.use(express_1["default"].static(dir));
app.use((0, serve_index_1["default"])(dir, { icons: true }));
app.use(function (req, res) {
    res.sendFile(dir + "/index.html");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
function generateId() {
    return Date.now() + "_" + Math.floor(Math.random() * 1e9);
}
