var express = require('express');
var router = express.Router();
const checkStatus = require("../middleware/auth")
const articleController = require("../controllers/article")

/* GET home page. */
router
  .get("/", articleController.getAll)
  .post("/addNew", checkStatus.auth,articleController.createNew)
  .put("/:id/edit", checkStatus.auth, articleController.update)
  .delete("/:id/delete", checkStatus.auth, articleController.dalete)

module.exports = router;
