// Current time and date
var DateTime = luxon.DateTime
var time = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)	
console.log (time) 

var dateElement = document.getElementById ("currentDay")

dateElement.textContent = time

