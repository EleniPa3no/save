var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = new express();

var msg;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connection.on("error", function(err) {
	if (err) console.error(err);
});

mongoose.connection.once("open", function() {
	console.log("Database connected...");
	var FormSchema = new mongoose.Schema({
		kodi:String,
		emri: String,
		mbiemri:String,
		lenda: String,
		oret: String,
		kreditet: String
	});
	var Form = mongoose.model("Form", FormSchema);

	app.post("/form", function(req, res) {
	
		var idstd = req.body.kodi;
		
			
		Form.create({kodi: idstd, emri: emriStudent, mbiemri: mbiemriStd, lenda: Lenda,oret: hours,kreditet: credits }, function(err, form) {
			if (err) {
				msg = "Internal Server Error. Form could not be submitted.";
				console.log(err);
			}
			else msg = "Form successfully submitted.";
				
			res.json({message: msg});
		});
	});
	app.post("/kerko_id", function(req, res) {
		
		var idstd = req.body.kodi;
	
		Form.findOne({kodi:idstd, emri: emriStudent, mbiemri: mbiemriStd, lenda: Lenda,oret: hours,kreditet: credits}, function(err, form) {
			if (err || !form) res.json({kodi:"", emri: "", mbiemri: "",lenda:"",oret:"",kreditet:""});
			else res.json(form);
		});
	});

});

mongoose.connect("mongodb://eleni:eleni@ds011409.mlab.com:11409/danceacademy").then(function() {
	app.listen(process.env.PORT || 4000, function() {
		console.log("Connected to localhost 4000...");
	});
});
