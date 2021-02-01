$(document).ready(function() {

    // Render current date
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    // On-click event for save
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text= $(this).siblings(".description").val();
        var time =$(this).parent().attr("id");
   
    // Save time and texts in local storage
        localStorage.setItem(time, text);
    })


    // Get time items from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));



    function hourTracker() {
    
        var currenthour = moment().hour();

    // Render correct hour
        $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour,currenthour)

    // Determines time
        if(blockHour < currenthour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
            }
    
        
        else if (blockHour === currenthour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            }
    
    
        else {
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
            }
        })
    }


    hourTracker();

})