const powerOn = document.querySelector(".powerOn");
const powerOff = document.querySelector(".powerOff");
const superMarioText = document.querySelector(".supermario");
const screen = document.querySelector("#screen");
const mario = document.getElementById("mario")



function encenderConsola() {
    let led = document.querySelector(".powerLed");
    led.classList.add('powerLedOn');
    led.classList.remove('powerLed');


    
    // textScreen2.style.display = "block";
    // textScreen2.style.display = "none";

    powerOn.style.display = "none";
    powerOff.style.display ="block";
    screen.style.backgroundColor = "white";

 
    animationNintendo = setTimeout(nintendo, 0);
    animationSuperMario = setTimeout(supermario, 1000);
    animationGame = setTimeout(game,2250);

}

function nintendo() {
    document.querySelector('.nintendo2').style.display = "block";


}

function supermario() {    
    document.querySelector('.nintendo2').style.display = "none";
    superMarioText.style.display = "block";
    
}

function game() {
    superMarioText.style.display = "none";
    // GAME DISPLAY
}

function apagarConsola() {

    let led = document.querySelector(".powerLedOn")
    
    led.classList.remove('powerLedOn');
    led.classList.add('powerLedOff');
    superMarioText.style.display = "none";
    
    powerOn.style.display = "block";
    powerOff.style.display = "none";

    setTimeout(redToInit,2000);
}

function redToInit() {
    let led = document.querySelector(".powerLedOff");
    led.classList.remove('powerLedOff');
    led.classList.add('powerLed');
    screen.style.backgroundColor = "#747570";

}

function marioJump(){

}