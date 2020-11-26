const express = require("express");

const systemInfo = require("../sysinfo");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(systemInfo());
  res.end();
});

module.exports = router;
