// Constantes para el programa

const powerOn = document.querySelector(".powerOn");
const powerOff = document.querySelector(".powerOff");
const superMarioText = document.querySelector(".supermario");
const screen = document.getElementById("screen");
const mario = document.getElementById("mario");
const plant = document.getElementById("plant");
const pressA = document.getElementById("pressA");

// Variables para contador TypeWritter 
var i = 0;
var txt = 'Pulsa "Start" para empezar...';
var speed = 50;

function encenderConsola() {
    let led = document.querySelector(".powerLed");
    led.classList.add('powerLedOn');
    led.classList.remove('powerLed');

    powerOn.style.display = "none";
    powerOff.style.display ="block";
    screen.style.backgroundColor = "white";

 
    animationNintendo = setTimeout(nintendo, 0);
    animationSuperMario = setTimeout(supermario, 1000);
    animationTypeWritter = setTimeout(typeWriter, 2250);
    // animationGame = setTimeout(game,4000);

}

function nintendo() {
    document.querySelector('.nintendo2').style.display = "block";


}

function supermario() {    
    document.querySelector('.nintendo2').style.display = "none";
    superMarioText.style.display = "flex";
    
}

function game() {
    pressA.style.display = "none";
    
    document.querySelector('.game').style.display = "flex";
    document.querySelector('#sky').style.display = "flex";
    document.querySelector('#mario').style.display = "flex";
    document.querySelector('#plant').style.display = "flex";
    document.querySelector('#ground').style.display = "flex";
    
    marioJump();

    let isAlive = setInterval(function (){
    
        let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("margin-bottom"));
        console.log(marioTop);
        let plantLeft = parseInt(window.getComputedStyle(plant).getPropertyValue("margin-left"));
        if(plantLeft <0 && plantLeft > -30 && marioTop <= 20){
            gameOver();
    
        }
    },10);

}

function gameOver(){
    document.querySelector('.game').style.display = "none";
    document.querySelector('#sky').style.display = "none";
    document.querySelector('#mario').style.display = "none";
    document.querySelector('#plant').style.display = "none";
    document.querySelector('#ground').style.display = "none";
    alert('Game Over');
}

function apagarConsola() {

    let led = document.querySelector(".powerLedOn")
    
    led.classList.remove('powerLedOn');
    led.classList.add('powerLedOff');
    
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



function typeWriter() {
    superMarioText.style.display = "none";
    pressA.style.display = "flex";
    document.getElementById("pressA1").style.display = "flex";
    if (i < txt.length) {
      document.getElementById("pressA1").innerHTML += txt.charAt(i);
      i++;
      console.log(i);
      setTimeout(typeWriter, speed);
    }
    setTimeout(function (){
        document.getElementById("pressA1").style.animation =  "pressAa 0.5s linear infinite";
    }, 2000);     
    const element = document.getElementById("start");
    element.addEventListener("click", game);
}

function pulsarStart() {
    alert('holaa');
}