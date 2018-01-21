let express = require("express"),
    router  = express.Router(),
    app     = express(),
    bodyParser = require("body-parser"),
    ObjectId = require('mongodb').ObjectID,
    port    = 3000 || process.env.PORT;

let db = require('./db');

//EXPRESS SETUP
app.use(bodyParser.json());
app.use('/api/', router);
app.use(express.static('public'));
app.use('/angular', express.static('angular/dist'));
app.use('/react', express.static('react/build'));
app.use('/vue', express.static('vue/dist'));


//API
router.get('/lists', function(req, res){
    db.get().collection('lists').find().toArray(function(err, docs){
        if(err) return res.send(err);
        return res.send(docs);
    });
});

router.get('/lists/:id', function(req, res){
    let listId = req.params.id;

    db.get().collection('lists').findOne({"_id":ObjectId(listId)}).then(function(result){
        return res.send(result);
    }, function(error){
        return res.send(error);
    });
});

router.post('/lists', function(req, res){
    let list = req.body;

    db.get().collection('lists').insertOne(list).then(function(result){
        return res.send(result);
    }, function(error){
        return res.send(error);
    });
});

router.put('/lists', function(req, res){
    let list = req.body;

    db.get().collection('lists').findOneAndUpdate({"_id": ObjectId(list._id)}, {$set: {"name": list.name, "items": list.items}}).then(function(result){
        return res.send(result);
    }, function(error){
        return res.send(error);
    });
});

router.delete('/lists/:id', function(req, res){
    let listId = req.params.id;

    db.get().collection('lists').findOneAndDelete({"_id": ObjectId(listId)}).then(function(result){
        return res.send(result);
    }, function(error){
        return res.send(error);
    });
});

//START SERVER
db.connect('mongodb://localhost:27017/comfram', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        app.listen(port, function(){
            console.log('Server running on port', port);
        });
    }
});