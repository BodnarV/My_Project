var express = require('express');
var rout = express.Router();
var User = require('../models/UserMongo');
var Prod = require('../models/Product');

const jwt = require('jsonwebtoken');
const Jwt_Secret = 'your_sercet_key';



//======================================================================

rout.post('/rename', (req, res) => {
    var oldP = req.body.oldPass;
    var oldL = req.body.oldLog;
    var oldName = req.body.oldName;

    var NewPass = req.body.NewPass;
    var NewLog = req.body.NewLog;
    var NewName = req.body.NewName;

    // console.log(NewPass,)

    User.updateOne({ login: oldL, password: oldP, name: oldName }, { login: NewLog, password: NewPass, name: NewName }).then(() => {
        
        User.find().then((user) => {
            res.send(user);
        })
    })



})
//===============================================================================
rout.get('/All', (req, res) => {
    
    if(req.headers.token){
    
    User.find().then((user) => {
        res.send(user);
    })
 }

//  var decoded = jwt.verify(req.headers.token, 'key');
//  res.send(decoded.foo[0].login);
})

//===============================================================================
rout.post('/login', (req, res) => {


    User.find({ login: req.body.login, password: req.body.password }).then((user) => {
        if (user != 0) {

            var token = jwt.sign({ foo: user[0].id },Jwt_Secret);
           
            res.send({
                user: user,
                token: token
            });

        }

    })
})
//============================================================================
rout.post('/delete', (req, res) => {
    User.remove({ login: req.body.login, password: req.body.password }).then(() => {

        User.find().then((users) => {
            res.send(users);
        })
    })


})
//==============================================================================

rout.post('/add', (req, res) => {
    var password = req.body.password;
    var login = req.body.login;
    var name = req.body.name;


    var user = new User({
        login: login,
        password: password,
        name: name,
        array: [],
        ident: Math.random(),

    });


    user.save().then((user) => {
        console.log('add new user');
    })
})



module.exports = rout;
