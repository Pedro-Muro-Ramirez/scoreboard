let homeScore = 0; 
let awayScore = 0; 
let totalHome = document.getElementById("home-score"); 
let totalAway = document.getElementById("away-score")

function addOne() {
    homeScore += 1; 
    totalHome.textContent = homeScore; 
}
function addTwo() {
    homeScore += 2; 
    totalHome.textContent = homeScore; 
}
function addThree() {
    homeScore += 3; 
    totalHome.textContent = homeScore; 
}
function addOneAway() {
    awayScore += 1; 
    totalAway.textContent = awayScore; 
}
function addTwoAway() {
    awayScore += 2; 
    totalAway.textContent = awayScore; 
}
function addThreeAway() {
    awayScore += 3; 
    totalAway.textContent = awayScore; 
}
function newGame() {
    homeScore = 0; 
    awayScore = 0;
    totalHome.textContent = homeScore;
    totalAway.textContent = awayScore;  
}





