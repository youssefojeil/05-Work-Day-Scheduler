// check if css & html loaded first
$(document).ready(function () {

    // variables for date and time
    var currentDate = $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var currentHour = moment().hour();

    // get saved data from local storage & display on time blocks
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    // for each loop over time blocks
    $(".time-block").each(function () {
        // get id of each block remove hour- from string & store in blockhour
        var blockHour = $(this).attr("id").split("hour-")[1];
        // convert string to number 
        blockHour = parseInt(blockHour);

        // conditionals for current time & block time 
        // if block time <  current time then add past class
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        // if block time = current time then add present class
        else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        // if neither option then add future class
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");        
        }
    });

    // assign saveBtn click listener for user input
    $(".saveBtn").on("click", function () {

        // get value from text area by traversing from button clicked
        // to the sibling element with class of description  
        var text = $(this).siblings(".description").val(); 
        // get id value from parent element of button clicked through id
        var time = $(this).parent().attr("id"); 
   

        // notify user that apointment was added
        $("#notify").text(`${text} was added to ${$(this).siblings(".hour").text()}`);

        // save key pair of time & text to local storage.
        localStorage.setItem(time, text);
    });
            
});
