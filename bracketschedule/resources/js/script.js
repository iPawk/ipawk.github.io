function displayDate(date, elemID){
    document.getElementById(elemID).innerHTML = date.getDate() + "th Aug " + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
}

function toggleLights(mode){
    document.body.style.background = (mode === "light") ? "#000000" : "#ffffff";

    var h1Elements = document.getElementsByTagName("h1");
    for(var i = 0; i < h1Elements.length; i++){
       h1Elements[i].style.color = (mode === "light") ? "#ffffff" : "#000000";
    }

    var h2Elements = document.getElementsByTagName("h2");
    for(var i = 0; i < h2Elements.length; i++){
       h2Elements[i].style.color = (mode === "light") ? "#ffffff" : "#000000";
    }
    
    var pElements = document.getElementsByTagName("p");
    for(var i = 0; i < pElements.length; i++) {
       pElements[i].style.color = (mode === "light") ? "#ffffff" : "#000000";
    }
}

var dateAU = new Date('08/11/2017 9:30:00 AM UTC');
var dateEU = new Date('08/12/2017 10:00:00 AM UTC');
var dateAMR = new Date('08/12/2017 1:00:00 AM UTC');

displayDate(dateAU, "AUNZ");
displayDate(dateEU, "EU");
displayDate(dateAMR, "AMR");

function lights(){
    if (document.getElementById('checkbox1').checked){
        toggleLights("dark");
    }
    else{
        toggleLights("light");
    }
}