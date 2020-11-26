const api = require("./routes/api");
const worklist = require("./routes/worklist");

module.exports = (app) => {
  app.use("/api", api);
  app.use("/worklist", worklist);
};
