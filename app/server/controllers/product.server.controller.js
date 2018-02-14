module.exports = function(app){

  var mongoose = require('mongoose');
  var express = require('express');



  var Todo = require('../models/product.server.model');


app.get('/ttt',function(req,res){
  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({todos});
  });
});

app.post('/ttt',function(req,res){
  console.log(req.body);
  const newTodo = new Todo(req.body);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Product added successfully',todo});
  })
});

 app.put('/ttt',function(req,res){
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Product Updated successfully',todo});
  })
});


app.delete('/hastobedeleated/:id',function(req,res){
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':todo+' deleted successfully'});
  })
});
}
