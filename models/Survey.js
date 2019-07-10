const mongoose = require('mongoose');
// Can be written both ways
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // this is destructuring
const RecipientSchema = require('./Recipient') 
// Mongoose wants to know all the different 
//properties used in your records before hand

const surveySchema = new Schema({
    // name   data type
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});


//make a collections
// provide the name of the collection 
// and then the schema or model used
mongoose.model('surveys', surveySchema);
 