function encenderConsola() {
    var led = document.querySelector(".powerLed");
    led.classList.add('powerLedOn');
    led.classList.remove('powerLed');

    var powerOn = document.querySelector(".powerOn");
    var powerOff = document.querySelector(".powerOff");

    powerOn.style.display = "none";
    powerOff.style.display ="block";
}


function apagarConsola() {
    var led = document.querySelector(".powerLedOn")
    led.classList.add('powerLed');
    led.classList.remove('powerLedOn');

    led.style.backgroundcolor = "red";

    var powerOff = document.querySelector(".powerOff");
    var powerOn = document.querySelector(".powerOn");

    powerOn.style.display = "block";
    powerOff.style.display = "none";
}