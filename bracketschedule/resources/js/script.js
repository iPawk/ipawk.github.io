function displayDate(date, elemID){
    document.getElementById(elemID).innerHTML = date.getDate() + "th Aug " + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
}

function toggleElementsColour(elemTag, mode){
    var elements = document.getElementsByTagName(elemTag);
    for (var i = 0; i < elements.length; i++){
        if (!(elements[i].classList.contains("countdown"))){
            elements[i].style.color = (mode === "dark") ? "#ffffff" : "#000000";
        }
    }
}

function toggleLights(mode){
    document.body.style.background = (mode === "dark") ? "#000000" : "#ffffff";
    
    toggleElementsColour("p", mode);
    toggleElementsColour("h1", mode);
    toggleElementsColour("h2", mode);
    toggleElementsColour("h3", mode);
    
    var divisions = document.getElementsByClassName("division");
    for (var i = 0; i < divisions.length; i++){
        divisions[i].style.borderColor = (mode === "dark") ? "#ffffff" : "#000000";
    }
}

function lights(){
    if (document.getElementById('checkbox1').checked){
        toggleLights("light");
    }
    else{
        toggleLights("dark");
    }
}

var dateAU = new Date('08/11/2017 9:30:00 AM UTC');
var dateAMR = new Date('08/12/2017 1:00:00 AM UTC');
var dateEU = new Date('08/12/2017 10:00:00 AM UTC');

var dateAU2 = new Date('08/11/2017 10:30:00 AM UTC');
var dateAMR2 = new Date('08/12/2017 2:00:00 AM UTC');
var dateEU2 = new Date('08/12/2017 11:00:00 AM UTC');

var dateQF1 = new Date('08/19/2017 3:00:00 AM UTC');

displayDate(dateAU, "AUNZ");
displayDate(dateAMR, "AMR");
displayDate(dateEU, "EU");

displayDate(dateAU2, "AUNZ2");
displayDate(dateAMR2, "AMR2");
displayDate(dateEU2, "EU2");

displayDate(dateQF1, "QF1");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

function showRemaining(elemID, endDate, timer){
    var now = new Date();
    var distance = endDate - now;
    
    if (distance < 0){
        clearInterval(timer);
        document.getElementById(elemID).innerHTML = 'Started/Completed';
        document.getElementById(elemID).style.color = "green";

        return;
    }
    
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(elemID).innerHTML = days + 'days ';
    document.getElementById(elemID).innerHTML += hours + 'hrs ';
    document.getElementById(elemID).innerHTML += minutes + 'mins ';
    document.getElementById(elemID).innerHTML += seconds + 'secs';
}

var timerAU = setInterval(function(){showRemaining("countdownAU", dateAU, timerAU);}, 1000);
var timerAMR = setInterval(function(){showRemaining("countdownAMR", dateAMR, timerAMR);}, 1000);
var timerEU = setInterval(function(){showRemaining("countdownEU", dateEU, timerEU);}, 1000);

var timerAU2 = setInterval(function(){showRemaining("countdownAU2", dateAU2, timerAU2);}, 1000);
var timerAMR2 = setInterval(function(){showRemaining("countdownAMR2", dateAMR2, timerAMR2);}, 1000);
var timerEU2 = setInterval(function(){showRemaining("countdownEU2", dateEU2, timerEU2);}, 1000);

var timerQF1 = setInterval(function(){showRemaining("countdownQF1", dateQF1, timerQF1);}, 1000);