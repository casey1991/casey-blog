var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Article = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String
    },
    creatTime:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Article',Article);