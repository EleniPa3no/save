//deklarojme librarite qe instaluam nga konsola
var express=require('express');
var app=express();
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
//therrasim nga public front endin
app.use(express.static('public'));
var msg;

//bejme te mundur lidhjen me databazen
mongoose.connection.on("error",function(err){
	if(err)
		console.log(err);
});

//lidhja me mlab
mongoose.connection.once("open",function(){
	console.log("Databaza u lidh");
//do krijojme skemen ne mlab
	var FormSchema=new mongoose.Schema({
		emri:String,
		qyteti:String
	});

	var Form=mongoose.model("Form",FormSchema);
//bejme post te dhenat nepermjeti expressit
	app.post("/form",function(req,res){
		var emriStd=req.body.emri;
		var	emriQyt=req.body.qyteti;


//krijojme formen
	Form.create({emri:emriStd,qyteti:emriQyt},function(err,form){

		if (err){
			msg="Server error";
			console.log(err);
		}
		else
			msg="Server success";
			res.json({message:msg});

	});
});
//per kerkimin e te dhenave
app.post('/kerkoEmrin',function(req,res){
	var emriStd=req.body.emri;
	Form.findOne({emri:emriStd},function(err,form){
		if(err || !form)
			res.json({emri:" ",qyteti:" "});
		else
			res.json(form);
	});
});


//kerkojme qytetin
app.post('/kerkoQytet',function(req,res){
	var emriQyt=req.body.qyteti;
	Form.findOne({qyteti:emriQyt},function(err,form){
		if(err || !form)
			res.json({emri:" ",qyteti:" "});
		else
			res.json(form);
	});
});
});

//marrim linkun nga mlab qe te behet lidhja me databazen
mongoose.connect("mongodb://jori:jori@ds011409.mlab.com:11409/danceacademy").then(function(){
	app.listen(process.env.PORT || 3000,function(){
		console.log("Local host shkon ne porten 3000");
	});
});