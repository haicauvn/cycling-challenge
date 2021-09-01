
// Perform Date Function
var formatStringDate = function(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options)
}

var passedDay = function(startDay) {
    return parseInt((new Date() - startDay) / (1000 * 60 * 60 * 24), 10);
}

// Show start and passed date
var startTextElement = document.querySelector(".start-text");
let startDay = new Date(2021,7,31);
startTextElement.innerText = formatStringDate(startDay);

var passedTextElement = document.querySelector(".passed-text");
passedTextElement.innerText = passedDay(startDay) + " days";

// Show challenge
var challengeTextElement = document.querySelector(".challenge-text");
challengeTextElement.innerText = "30 days";

// Show percent process

var calPercent = function(startDate, total) {
    return parseInt(passedDay(startDate) * 100 / total) ;
}
var percentElement = document.querySelector("#percent-circle");
let percent = calPercent(startDay, 30);
if(percent > 100) {
    percent = 100;
}
percentElement.classList.add("p" + percent);
percentElement.querySelector("span").innerText = percent + "%"
console.log(percentElement.querySelector("span"))
