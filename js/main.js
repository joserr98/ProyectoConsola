const powerOn = document.querySelector(".powerOn");
const powerOff = document.querySelector(".powerOff");

function encenderConsola() {
    let led = document.querySelector(".powerLed");
    led.classList.add('powerLedOn');
    led.classList.remove('powerLed');

    powerOn.style.display = "none";
    powerOff.style.display ="block";
}


function apagarConsola() {
    let led = document.querySelector(".powerLedOn")
    
    led.classList.remove('powerLedOn');
    led.classList.add('powerLed');

    powerOn.style.display = "block";
    powerOff.style.display = "none";
}

