const mongoose = require('mongoose');
// Can be written both ways
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // this is destructuring

// Mongoose wants to know all the different 
//properties used in your records before hand

const userSchema = new Schema({
    // name   data type
    googleId: String,
    credits: { type: Number, default: 0 }
});


//make a collections
// provide the name of the collection 
// and then the schema or model used
mongoose.model('users', userSchema);
 