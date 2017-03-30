var express = require('express');
var router = express.Router();
/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/templeDB');
var templeSchema = mongoose.Schema({ //Defines the Schema for this database
  Name: String,
  Temples: mongoose.Schema.Types.Mixed
});

var Temples = mongoose.model('Temples', templeSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
  console.log('Connected');
});


router.post('/temples', function(req, res, next) {
  console.log("POST temples route");
  console.log(req.body);
  var newtemples = new Temples(req.body);

  console.log(newtemples);
  newtemples.save(function(err, post) {

    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

/* GET comments from database */
router.get('/temples', function(req, res, next) {
  console.log("In the GET route?");
  Temples.find(function(err,templeList) { //Calls the find() method on your database
    if (err) return console.error(err); //If there's an error, print it out
    else {
      console.log(templeList); //Otherwise console log the comments you found
      res.json(templeList);

    }
  })
});

router.delete('/comment', function(req, res, next) {
  console.log('Delete route');
  Comment.remove({}, function(err){
    if (err) return console.error(err);
    else {
      console.log('deleted comments');
      res.sendStatus(200);
    }
  });
})

module.exports = router;
