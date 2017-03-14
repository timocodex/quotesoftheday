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
      Quote.findOneAndRemove({_id:req.params.id},function(err){
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
