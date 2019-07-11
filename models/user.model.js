const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  nom: {
    type: String
  },
  prenom : {
    type: String
  }
},{
    collection: 'User'
});

module.exports = mongoose.model('User', User);