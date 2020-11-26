const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({ wonum: "1003", description: "fixer la plomberie" });
  res.end();
});

module.exports = router;
