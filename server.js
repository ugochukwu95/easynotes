const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected to the database"); 
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

// Producing a simple route
app.get('/', (req, res) => {
	res.json({"message": "Welcome to Easynotes application."})
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// port to listen for requests
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});