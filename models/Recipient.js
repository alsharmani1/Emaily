const mongoose = require('mongoose');
// Can be written both ways
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // this is destructuring

// Mongoose wants to know all the different 
//properties used in your records before hand

const recipientSchema = new Schema({
    // name   data type
    email: String,
    responded: { type: Boolean, default: false }
});


//make a collections
// provide the name of the collection 
// and then the schema or model used
module.exports = recipientSchema;
 