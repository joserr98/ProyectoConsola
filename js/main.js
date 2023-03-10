// Constantes para el programa.
const powerOn = document.querySelector(".powerOn");
const powerOff = document.querySelector(".powerOff");
const superMarioText = document.querySelector(".supermario");
const screen = document.getElementById("screen");
const mario = document.getElementById("mario");
const plant = document.getElementById("plant");
const pressA = document.getElementById("pressA");

// Audios.
const gameboyaudio = new Audio("../audio/gameboyaudio.mp3");
const nintendoaudio = new Audio("../audio/nintendoaudio.mp3");
const supermarioaudio = new Audio("../audio/supermarioaudio.mp3");
const startmeupaudio = new Audio("../audio/startmeupaudio.mp3");
const audiomariobross = new Audio("../audio/mariobrossaudio.mp3");
const audiogameover = new Audio("../audio/gameoveraudio.mp3");
const audiogameover2 = new Audio("../audio/gameover2audio.mp3");

// Variables para contador TypeWritter.
var i = 0;
var txt = "Pulsa B para empezar...";
var speed = 50;

// Función de encendido de consola.
function consoleOn() {
  let led = document.querySelector(".powerLed");
  led.classList.add("powerLedOn");
  led.classList.remove("powerLed");

  powerOn.style.display = "none";
  powerOff.style.display = "block";

  animationScreenGameBoyText = setTimeout(screenGameBoyText, 0);
  animationNintendo = setTimeout(nintendo, 3000);
  animationSuperMario = setTimeout(supermario, 4000);
  animationTypeWritter = setTimeout(typeWriter, 6250);
}

// Función que muestra el logo de GameBoy con su animación.
function screenGameBoyText() {
  gameboyaudio.play();
  screen.style.backgroundColor = "black";
  document.querySelector("#screenGameBoyText").style.display = "flex";
}

// Función que muestra el logo de Nintendo.
function nintendo() {
  screen.style.backgroundColor = "white";
  document.querySelector("#screenGameBoyText").style.display = "none";
  nintendoaudio.play();
  document.querySelector(".nintendo2").style.display = "block";
}

// Función que muestra el logo de SUPERMARIO.
function supermario() {
  supermarioaudio.play();
  document.querySelector(".nintendo2").style.display = "none";
  superMarioText.style.display = "flex";
  setTimeout(function () {
    supermarioaudio.play();
  }, 2000);
}

// Hace la animación de escribir.
function typeWriter() {
  startmeupaudio.play();

  superMarioText.style.display = "none";
  pressA.style.display = "flex";
  document.getElementById("pressA1").style.display = "flex";
  if (i < txt.length) {
    document.getElementById("pressA1").innerHTML += txt.charAt(i);
    i++;
    console.log(i);
    setTimeout(typeWriter, speed);
  }
  setTimeout(function () {
    document.getElementById("pressA1").style.animation =
      "pressBAnimation 0.5s linear infinite";
  }, 2000);
}

// Permite iniciar el juego.
function pulsarB() {
  startmeupaudio.pause();

  document.querySelector("#bButton").addEventListener("click", game);
}

// Inicializa el juego.
function game() {
  audiomariobross.play();
  pressA.style.display = "none";

  document.querySelector(".game").style.display = "flex";
  document.querySelector("#sky").style.display = "flex";
  document.querySelector("#mario").style.display = "flex";
  document.querySelector("#plant").style.display = "flex";
  document.querySelector("#ground").style.display = "flex";

  marioJump();

  let isAlive = setInterval(function () {
    let marioTop = parseInt(
      window.getComputedStyle(mario).getPropertyValue("margin-bottom")
    );
    console.log(marioTop);
    let plantLeft = parseInt(
      window.getComputedStyle(plant).getPropertyValue("margin-left")
    );
    if (plantLeft < 0 && plantLeft > -30 && marioTop <= 20) {
      audiomariobross.pause();
      gameOver();
    }
  }, 10);
}

// Hace que Mario salte.
function marioJump() {
  if (mario.classList != "jump") {
    mario.classList.add("jump");

    setTimeout(function () {
      mario.classList.remove("jump");
    }, 500);
  }
}

// Muestra la pantalla final al perder el juego.
function gameOver() {
  audiogameover2.play();
  setTimeout(function () {
    audiogameover2.pause();
  }, 5000);
  setTimeout(function () {
    audiogameover.play();
  }, 5001);

  document.querySelector(".game").style.display = "none";
  document.querySelector("#sky").style.display = "none";
  document.querySelector("#mario").style.display = "none";
  document.querySelector("#plant").style.display = "none";
  document.querySelector("#ground").style.display = "none";
  document.querySelector("#gameover").style.display = "flex";
  setTimeout(function () {
    consoleOff();
  }, 7000);
}

// Apaga la consola.
function consoleOff() {
  let led = document.querySelector(".powerLedOn");

  led.classList.remove("powerLedOn");
  led.classList.add("powerLedOff");

  powerOn.style.display = "block";
  powerOff.style.display = "none";

  superMarioText.style.display = "none";
  mario.style.display = "none";
  plant.style.display = "none";
  pressA.style.display = "none";
  document.querySelector("#gameover").style.display = "none";
  document.getElementById("pressA1").style.display = "none";
  screen.style.backgroundColor = "#747570";
  setTimeout(ledRedToOff, 2000);
}

// Convierte el red de rojo a 'apagado'.
function ledRedToOff() {
  let led = document.querySelector(".powerLedOff");
  led.classList.remove("powerLedOff");
  led.classList.add("powerLed");
}
