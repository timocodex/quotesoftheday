var express = require('express');
var router = express.Router();
var quote = require('../controllers/quotes.controller.js')
/* GET home page. */
router.post('/',quote.create);
router.get('/',quote.randomQuote)
router.delete('/:id',quote.delete)
router.get('/random',quote.randomnessQuote)
module.exports = router;
