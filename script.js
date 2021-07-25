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

// Event block changes color based on future present or past hour 

const rows = document.getElementsByClassName("row");
let eventBlock = parseInt(DateTime.now().toLocaleString(DateTime.TIME_SIMPLE));

Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowBlock;
    if (rowIdString) {
      rowBlock = parseInt(rowIdString);
    }
    if (rowBlock) {
    // Compares row id to current hour and sets color accordingly
    if (eventBlock === rowBlock) {
      setColor(row, "lightgreen");
    } else if ((eventBlock < rowBlock) && (eventBlock > rowBlock - 6)) {
      setColor(row, "yellow");
    } else if ((eventBlock > rowBlock) && (eventBlock < rowBlock + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});
function setColor(element, color) {
    element.style.backgroundColor = color;
  }
  