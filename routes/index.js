var express = require('express');
var router = express.Router();
var Book = require("../models").Book;

function asyncHandler(cb) {
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error) {
      res.status(500).send(error);
    }
  }
}

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
  const books = await Book.findAll();
  console.log(book.toJSON());
  res.render('index', { books, title: "app" });
}));


module.exports = router;
