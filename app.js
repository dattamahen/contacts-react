var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/contacts');

var app=express()
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var contactsSchema = mongoose.Schema({
    name: String,
    fullName: String,
    phone: String,
    email:String
 });

var contacts = mongoose.model("contacts", contactsSchema);

app.get('/test',function(err,res,next){
    res.send('All-Names')
    console.log('Success');
 })

 app.get('/allcontacts',function(err,res,next){
    contacts.find(function(err, response){
        if(err) throw err
        res.json(response); 
     });
    
 },function(error){
     console.log('allcontact : api failed')
 })

 app.post("/savecontact",function(error,res,next){
    var newContact={
        "name" : "Shreyas",
        "lastName" : "Mahendrakar",
        "contact" : "8123621729",
        "email" : "dattamahendrakar@gmail.com"
    }
    contacts.create(newContact,function(error,res){
        if(error) throw error
        console.log('Inserted')
    })
 },function(error){
     console.log('savecontact : api failed'+error)
 })

 app.delete("/deletecontact",function(req,res,next){
    contacts.remove({
        id : req.params.id}),function(err,user){
            if(err){
                return res.send(err)
            }
            res.json({message:'Deleted'})
                
        }
 },function(error){
     console.log('deletecontact api error' + error)
 })

 app.delete("/updatecontact",function(req,res,next){
    contacts.updateOne(req.params.id,req.params),function(err,user){
            if(err){
                return res.send(err)
            }
            res.json({message:'Updated'})
                
        }
 },function(error){
     console.log('Update api error' + error)
 })



 app.listen('1234')
 module.exports = app;
 