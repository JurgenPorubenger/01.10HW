const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    tickets: [{
        fromName: String,
        toName: String,
        departAt: String,
        vehicle: String
    }],
});


const Model = mongoose.model('Article', ArticleSchema);
module.exports = Model;