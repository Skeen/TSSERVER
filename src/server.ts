//var express = require('express');
//var console = require('.utils/console');
//var bodyParser = require('body-parser');

//var app = express();

//app.use(bodyParser.urlencoded)({limit: '50mb', extended: false});
//app.use(bodyParser.json({limit: '50mb'}));

//import * as express from 'express';
//import * as bodyParser from 'body-parser';

var express = require('express');
var bodyParser = require('body-parser');

export class Server 
{
	private app: any;

	constructor()
	{
		this.app = express();

		this.app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
		this.app.use(bodyParser.json({limit: '50mb'}));

		this.app.get('/', function(req: any,res: any)
		{
			res.status(200);
			res.type("html");
			res.sendFile("res/index.html", {root: __dirname});
		});

		this.app.get('/ping', function(req: any,res: any)
		{
			res.status(200);
			res.type("text/plain");
			res.send("pong");
		});

		this.app.post('/add_timeseries', function(req: any, res: any)
		{
			// Do something with time series.
		
			// Respond when done.
			res.status(200);
			res.type("text/plain");
			res.send("Success");
		});
		
		this.app.listen(3000, function()
		{
			console.log("Listening on port 3000");
			});

	}
}
