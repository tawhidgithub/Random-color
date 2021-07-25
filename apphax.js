const colorsHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const span = document.getElementById("span");

btn.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colorsHex[getRendomNumber()];
    }


    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRendomNumber() {
    return Math.floor(Math.random() * colorsHex.length);

}




