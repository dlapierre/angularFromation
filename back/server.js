var express = require("express");
var serveIndex = require("serve-index");
var app = express();
var port = 3000;
var dir = "../front/dist/front";
app.use("/", function (req, res, next) {
    console.log("url", req.url);
    next();
});
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
