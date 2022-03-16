const express = require('express')
const router = express.Router();
var util = require('../services/util')

router.get('/getEvent',(req,res)=>{
    Event.getEvents((err, events)=>{
        if(err){
            throw err;
        } 
        res.json(util.filterEvents(events));
        // res.json(events)
    })
})
/* 
object =  {
    "name": "eventName",
    "time": new Date(),
    "duration": "any numerical value"
}
*/
router.post('/createEvent',(req,res)=>{
    var event = req.body;
    console.log(event);
    Event.addEvent(event, (err,event)=>{
        if(err){
            throw err;
        }
        res.json(event);
    }) 
})

module.exports = router;