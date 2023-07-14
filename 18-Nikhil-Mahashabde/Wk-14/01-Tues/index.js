const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

// binds port to app (3000 is commonly used)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// used for parsing url encoded bodies in requests
app.use(express.urlencoded({ extended: true }));

const compliments = [
  "You have a great smile!",
  "You're an amazing friend.",
  "You're a talented and creative person.",
  "You always bring a positive attitude.",
  "You're an inspiration to others.",
  "You have a fantastic sense of style.",
  "You're a great listener.",
  "You're intelligent and quick-witted.",
  "You have a beautiful soul.",
  "You're doing an excellent job.",
];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title></title>
      </head>
      <body style="background-color: rgb(100, 200, 100)">
        <h1>Hello homework w14 class 1...!</h1>
        <h3>The time is ${new Date().toISOString()} homework w14 class 1...!</h1>
      </body>
    </html>
  `);
});

app.get("/compliment/:name", (req, res) => {
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];

  res.send(`
    <html>
      <head>
        <title></title>
      </head>
      <body style="background-color: rgb(100, 200, 100)">
        <h1>Hello homework w14 class 1...!</h1>
         <p>${req.params.name} ,${compliment}</p>
      </body>
    </html>
  `);
});
