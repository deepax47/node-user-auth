const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var mongoose = require('./db/mongoose');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());


app.post('/users', (req, res) => {
    
    console.log(req.body); 
    
    
    var user = new User({
        name : req.body.name,
        age : req.body.age,
        email : req.body.email

    });
    user.save().then((doc) => {
        res.send(doc);
        console.log('user saved: \n', doc);
    }, (e) => {
        res.send(e);
        console.status(400).log('unable to save the user: \n', e);
    });
});

app.listen(3000, () => {
   console.log('Server running on port 3000'); 
});




