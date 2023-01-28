let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
const addToRed = () => {
    red.innerText++
}
const addToYellow = () => {
    yellow.innerText++
}
const addToGreen = () => {
    green.innerText++
}
red.onclick = () => addToRed();
yellow.onclick = () => addToYellow();
green.onclick = () => addToGreen();

let clearBtn = document.getElementById('clear-all');
clearBtn.onclick = () => {
    red.innerText = 0;
    yellow.innerText = 0;
    green.innerText = 0;
}