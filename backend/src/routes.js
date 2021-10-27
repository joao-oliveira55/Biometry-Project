const express = require("express");
const home = require("./routes/home");
const login = require("./routes/login");
const isAuthenticated = require("./routes/middleware/isAuthenticated");
const posts = require("./routes/posts");
const routes = express.Router();

routes.post("/login", login )

routes.get("/home", isAuthenticated, home )

routes.get("/post", isAuthenticated, posts )

module.exports = routes