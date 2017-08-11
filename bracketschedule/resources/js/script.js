function displayDate(date, elemID){
    document.getElementById(elemID).innerHTML = date.getDate() + "th Aug " + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
}

function toggleElementsColour(elemTag, mode){
    var elements = document.getElementsByTagName(elemTag);
    for (var i = 0; i < elements.length; i++){
       elements[i].style.color = (mode === "dark") ? "#ffffff" : "#000000";
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

displayDate(dateAU, "AUNZ");
displayDate(dateAMR, "AMR");
displayDate(dateEU, "EU");

displayDate(dateAU2, "AUNZ2");
displayDate(dateAMR2, "AMR2");
displayDate(dateEU2, "EU2");