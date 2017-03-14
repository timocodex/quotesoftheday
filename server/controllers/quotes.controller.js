var Quote = require('../models/quote')


module.exports = {
  create: function(req,res){
      var newQuote = new Quote({
        quote: req.body.quote
      })
      newQuote.save(function(err){
        if(err){
          res.send(err)
        }
        else{
          res.json(newQuote)
        }
      })
    },
    seed: function(req,res){

      Quote.insertMany([{quote:'I love you the more in that I believe you had liked me for my own sake and for nothing else.',quoter:'John Keats'},
{quote:'But man is not made for defeat. A man can be destroyed but not defeated.',quoter:'Ernest Hemingway'},
{quote:'When you reach the end of your rope, tie a knot in it and hang on.',quoter:'Franklin D. Roosevelt'},
{quote:'There is nothing permanent except change.',quoter:'Heraclitus'},
{quote:'You cannot shake hands with a clenched fist.',quoter:'Indira Gandhi'},
{quote:'Let us sacrifice our today so that our children can have a better tomorrow.',quoter:'A. P. J. Abdul Kalam'},
    ]).then(res.send('done seeding'))
    },
    show:function(req,res){
      Quote.find({},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    },
    delete: function(req,res){
      Quote.remove({},function(err){
        if(err){
          res.send(err)
        }
        else{
          res.send('delete berhasil')
        }
      })
    },
    randomQuote: function(req,res){
      Quote.find({},function(err,result){
        if(err){
          res.send(err)
        }
        else{

          res.render('index',result[Math.floor((Math.random() * result.length ))])
        }
      })
    },
    randomnessQuote: function(req,res){
      Quote.find({},function(err,result){
        if(err){
          res.send(err)
        }
        else{

          res.json(result[Math.floor((Math.random() * result.length ))])
        }
      })
    }
}
