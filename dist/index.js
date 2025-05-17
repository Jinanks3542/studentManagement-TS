"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mainRoute_1 = require("./router/mainRoute");
const mongoose_1 = require("mongoose");
const mongoURL = process.env.MONGODB_URL;
if (!mongoURL) {
    throw new Error(" MONGODB_URL is not defined in your .env file.");
}
mongoose_1.default.connect(mongoURL).then(() => {
    console.log("Mongo connected ..");
}).catch((err) => {
    console.log(" MongoDB connection error:", err);
});
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    console.log("reached");
    res.send("hiiii");
});
app.use('/', mainRoute_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running`);
});
