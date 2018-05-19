const express = require("express");
const cors = require("express-cors");

const jwt = require("jsonwebtoken");
const route = require("./server/route");

const app = express();
app.use(
    cors({
        allowedOrigins: ["localhost:8080"]
    })
);

const articles = require("./server/data-base/articles");

//ADMIN ROUTE
app.use("/countries", route.countries);
app.use("/mountains", route.mountains);
app.use("/systems", route.systems);
app.use("/fotos", route.fotos);
app.use("/articles", route.articles);
app.use("/", route.users);

//UI ROUTE
app.use("/ui/articles", route.articlesUi);
app.use("/ui/fotos", route.fotosUi);
app.use("/ui/system", route.systemsUi);
app.use("/ui/mountains", route.mountainsUi);

app.use("/*/", (req, res) => res.send("adad3"));

app.listen(4000, () => console.log("Server start 4000"));
