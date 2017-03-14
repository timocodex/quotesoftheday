// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var quoteSchema = new Schema({
  quote: {type: String},
  quoter: {type: String}
});


var Quote = mongoose.model('User', quoteSchema);


module.exports = Quote;
