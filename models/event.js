var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    time:{
        type: Date,
        required: true
    },
    duration:{
        type: String,
        required: true
    }

});

var Event = module.exports = mongoose.model('Event',eventSchema);

module.exports.getEvents = (callback)=>{
    Event.find(callback);
}

module.exports.addEvent = (event, callback) =>{
    Event.create(event, callback);
}