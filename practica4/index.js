const express = require("express");
const { request } = require("http");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (request, response) => {
  const incomingData = request.body;
  console.log(incomingData);
  response.send(`usuario con nombre ${incomingData} tiene como profesion
${incomingData.jobTitle}`);
});

app.listen(3000);
