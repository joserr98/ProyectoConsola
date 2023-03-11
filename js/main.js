const powerOn = document.querySelector(".powerOn");
const powerOff = document.querySelector(".powerOff");
const superMarioText = document.querySelector(".supermario");
const screen = document.querySelector("#screen");
const mario = document.getElementById("mario");
const plant = document.getElementById("plant");


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
    document.querySelector('.game').style.display = "flex";
    document.querySelector('#sky').style.display = "flex";
    document.querySelector('#mario').style.display = "flex";
    document.querySelector('#plant').style.display = "flex";
    document.querySelector('#ground').style.display = "flex";
    
    marioJump();

    let isAlive = setInterval(function (){
    
        let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("margin-bottom"));
        let plantLeft = parseInt(window.getComputedStyle(plant).getPropertyValue("margin-left"));
        if(plantLeft <0 && plantLeft > -30 && marioTop <= 20){
            // gameOver();
    
        }
    },10);

}

function gameOver(){
    document.querySelector('#gameover').style.display = "flex";
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
    if (mario.classList != "jump"){
    
        mario.classList.add("jump");

        setTimeout(function(){
            mario.classList.remove("jump");
        },500);
    }
}

