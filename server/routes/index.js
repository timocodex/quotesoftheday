var express = require('express');
var router = express.Router();
var quote = require('../controllers/quotes.controller.js')
/* GET home page. */
router.post('/',quote.create);
router.get('/',quote.randomQuote)
router.delete('/',quote.delete)
router.get('/random',quote.randomnessQuote)
router.post('/seed',quote.seed);
module.exports = router;
