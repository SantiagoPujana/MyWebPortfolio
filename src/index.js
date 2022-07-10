const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

const whiteList = ['https://santiagopujana.github.io', 'https://santiagopujana.github.io/MyWebPortafolio'];

app.use(cors({ origin: whiteList }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(`/.netlify/functions/index/api/email`, require("./endpoints/email_api"));
app.use(`/.netlify/functions/index/api/init_web_portfolio`, require("./endpoints/wp_init"));

module.exports = app;
module.exports.handler = serverless(app);