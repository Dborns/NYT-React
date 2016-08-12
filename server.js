var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

var app = express();
var PORT = process.env.PORT || 3000; 

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));


var databaseUrl = 'localDB';
var collections = ["history"];

var db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
  console.log('MongoDB Error: ', err);
});


app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

app.get('/api/', function(req, res) {

  db.history.find({}).sort({date: -1}).limit(5, function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/', function(req, res){
  console.log("BODY: " + req.body.headline);

  db.history.insert({"title": req.body.headline, "url": req.body}, function(err){
    if(err){
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  })
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

