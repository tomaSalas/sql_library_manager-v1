var express = require('express');
var router = express.Router();
var book = require("../models").Book;

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
  // res.render('index', { title: 'Express' });
  const books = await Book.findAll();
  console.log(books.toJSON());
  res.render('index', { books, title: "app" });
}));


module.exports = router;
