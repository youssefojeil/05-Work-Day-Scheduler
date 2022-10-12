// check if css & html loaded first
$(document).ready(function () {

    // variables for date and time
    var currentDate = $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var currentHour = moment().hour();
    console.log(currentHour);
    console.log(currentDate.text());

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
        console.log($(this));
        console.log(typeof($(this).attr("id"))); 
        // get id of each block remove hour- from string & store in blockhour
        var blockHour = $(this).attr("id").split("hour-")[1];
        // convert string to number 
        blockHour = parseInt(blockHour);
        console.log(typeof(blockHour));
        console.log("block hour is: " + blockHour + "\nCurrent Hour is: " + currentHour);

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

        console.log($("#notify").text())
        // check current button click
        console.log(this);
        // taken the change from the sibling html description attribute
        
        console.log($(this).siblings());
        console.log($(this).siblings(".description"));
        var text = $(this).siblings(".description").val(); 
        // taken the change from the parent html id attribute
        
        console.log($(this).siblings(".hour").text());
        
        var time = $(this).parent().attr("id"); 
        console.log(time);

        // notify user that apointment was added
        $("#notify").text(`${text} was added to ${$(this).siblings(".hour").text()}`);

        // set key pair of time & text to local storage.
        localStorage.setItem(time, text);
    });
            
});
