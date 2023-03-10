const powerOn = document.querySelector(".powerOn");
const powerOff = document.querySelector(".powerOff");
const textScreen = document.querySelector(".screen-gameboy-text");
const textScreen2 = document.querySelector(".screen-gameboy-text2");
const screen = document.querySelector("#screen");

function encenderConsola() {
    let led = document.querySelector(".powerLed");
    led.classList.add('powerLedOn');
    led.classList.remove('powerLed');
    


    powerOn.style.display = "none";
    powerOff.style.display ="block";
    screen.style.backgroundColor = "white";

    document.querySelector('.nintendo2').style.display = "block";
    
    setTimeout(nintendo, 1000);
    setTimeout()
}

function nintendo() {
    document.querySelector('.nintendo2').style.display = "none";
    textScreen.style.display = "block";
    textScreen2.style.display = "block";
}

function apagarConsola() {
    let led = document.querySelector(".powerLedOn")
    
    led.classList.remove('powerLedOn');
    led.classList.add('powerLedOff');
    textScreen.style.display = "none";
    textScreen2.style.display = "none";
    screen.style.backgroundColor = "#747570";
    powerOn.style.display = "block";
    powerOff.style.display = "none";

    setTimeout(redToInit,2000);

}

function redToInit() {
    let led = document.querySelector(".powerLedOff");
    led.classList.remove('powerLedOff');
    led.classList.add('powerLed');
}