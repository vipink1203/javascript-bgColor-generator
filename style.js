var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('random');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function getRandom() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb(" + x + "," + y + "," + z + ")";
    return bgcolor;
}

function random_bg_color() {
    bgColor1 = getRandom();
    bgColor2 = getRandom();
    body.style.background = "linear-gradient(to right, " + bgColor1 + ", " + bgColor2 + ")";
    css.textContent = body.style.background + ";";
}

button.addEventListener('click', random_bg_color);