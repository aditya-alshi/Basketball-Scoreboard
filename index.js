
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreTotal = 0;
let guestScoreTotal = 0;


// -----------------------------------------------------------


// home functions
function homePlusOne(){
    homeScore.textContent="";
    homeScoreTotal += 1;
    homeScore.textContent += homeScoreTotal;
}

function homePlusTwo(){
    homeScore.textContent="";
    homeScoreTotal += 2;
    homeScore.textContent += homeScoreTotal;
}

function homePlusThree(){
    homeScore.textContent="";
    homeScoreTotal += 3;
    homeScore.textContent += homeScoreTotal;
}


// -----------------------------------------------------------------


// guest functions
function guestPlusOne(){
    guestScore.textContent="";
    guestScoreTotal += 1;
    guestScore.textContent += guestScoreTotal;
}

function guestPlusTwo(){
    guestScore.textContent="";
    guestScoreTotal += 2;
    guestScore.textContent += guestScoreTotal;
}

function guestPlusThree(){
    guestScore.textContent="";
    guestScoreTotal += 3;
    guestScore.textContent += guestScoreTotal;
}


// -------------------------------------------------------------------


//new game function
function newGame(){
    guestScore.textContent="";
    homeScoreTotal = 0;
    guestScoreTotal = 0;
    homeScore.textContent = homeScoreTotal;
    guestScore.textContent = guestScoreTotal;
}