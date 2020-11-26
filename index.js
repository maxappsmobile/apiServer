const config = require("config");

const express = require("express");
const app = express();
app.disable("x-powered-by");

console.log("PRCESS NODE ENV ...", process.env.NODE_ENV);

console.log(" port from config ...", config.get("port"));
var i = 0;
// Display memory size defd wsdas
console.log("application name", config.get("name"));

app.use((req, res, next) => {
  console.log("validating the user  ....");
  next();
});

if (app.get("env") === "development")
  app.use((req, res, next) => {
    console.log("logging req ", req.url);
    next();
  });

require("./routes")(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server start on port ... ", port));
