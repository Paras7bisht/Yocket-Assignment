filterEvents = (event) =>{
    
    var filteredEvents = {"upcomingEvents":[],"liveEvents":[]};
    var currDate = new Date();
    event.forEach(element => {
        console.log("inside foreach ");
        if(element["time"].getTime() - currDate.getTime() > 0){
            filteredEvents["upcomingEvents"].push(element);
        }

        if( element["time"].getTime() - currDate.getTime() > 0 && element["time"].getTime() - currDate.getTime() < 600000){
            filteredEvents["liveEvents"].push(element);
        }
    });
    return filteredEvents;
}

module.exports.filterEvents = filterEvents;