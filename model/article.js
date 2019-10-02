const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const TripToHellSchema = new Schema({
        fromName: String,
        toName: String,
        departAt: String,
        vehicle: String
});


const Model = mongoose.model('TripToHellSchema', TripToHellSchema);
module.exports = Model;