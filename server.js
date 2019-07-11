const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./database/DB.js');
const businessRoute = require('./routes/business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


// const MongoClient = require('mongodb').MongoClient;

// // replace the uri string with your connection string.
// const uri = "mongodb+srv://jackyhans22:<Eminem2018>@moncluster-1ctlp.mongodb.net/test?retryWrites=true&w=majority"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
  
//    // perform actions on the collection object
 
// });



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', businessRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});