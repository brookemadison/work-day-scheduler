
// Current time and date

var DateTime = luxon.DateTime
var time = DateTime.now().toLocaleString(DateTime.DATE_FULL)
console.log(time)

var dateElement = document.getElementById("currentDay")

dateElement.textContent = time

var time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)
console.log(time)

var dateElement = document.getElementById("currentTime")

dateElement.textContent = time

// Changes color based on future present or past hour 

var hours = $(".hour")
function changeBackgroundColor() {

    var currentHourEl = DateTime.now(DateTime.TIME_24_SIMPLE);
    ;


    $(".description").each(function () {
        var blockId = parseInt($(this).attr("id").split("-")[1])

        if (blockId < currentHourEl) {
            $(this).addClass("past")

        } else if (currentHourEl == blockId) {
            $(this).removeClass("past")
            $(this).addClass("present")

        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }


    });
};

changeBackgroundColor()

// save button saves to local storage

$(".saveBtn").click(function (event) {
    event.preventDefault();

    var rowParent = $(this).parent();

    var textChild = $(rowParent).children(".description")

    var textID = ($(textChild).attr("id"))

    var eventText = ($(textChild).val());

    localStorage.setItem(textID, eventText)

})


function displayLocalStorage() {

    for (var i = 9; i < 18; i++) {
        var keyName = "text-" + i;
        var displayTask = localStorage.getItem(keyName);
        var keySelector = "#" + keyName;
        $(keySelector).append(displayTask);
    }
}

displayLocalStorage();


//Clear schedule button to clear localStorage 
$("#clearSchedule").on("click", function(){
    localStorage.clear();
  }) 

