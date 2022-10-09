/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
Current time block shiould be red color
past time block will be grey color
future time block will be green

table
time | user input | save button
 hour starts at 9 am
 hour ends at 17
div id = hour x class row time-block past
div id = hour x+1 class row time-block past 

*/


/* function for new event */
function newEvent() {

}

/* function to display events from storage */
function displayStoredEvents() {
    //$("#hour-12") = local Storage.getItem("hour-12")

}

/* function save event to local storage */
function storeEvent() {
    // localStorage.setItem("hour-9")
    // let hour11 = $("#hour-11").val().localStorage.setItem("hour-11", hour11);
}

/* function to display current time & day */
function currentTime() {

}