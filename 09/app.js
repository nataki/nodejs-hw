var express = require('express');
var app = express();

var router = express.Router();
router.use('/', function(req, res, next){
    console.log("Time: ", Date.now());
    next();
});
router.get('/notes', function(req, res){
    res.send('Get notes');
});
router.route('/note')
    .get(function(req, res){
        res.send("Get note");
    })
    .post(function(req, res){
        res.send("Create note");
    })
    .put(function(req, res){
        res.send("Update note");
    })
    .delete(function(req, res){
        res.send("Delete note");
    });


app.use('/', router);

app.listen(3000, function(){
    console.log("App listens on port 3000");
});