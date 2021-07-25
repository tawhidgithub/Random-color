const colors = ["blue", "red", "yellow", "green"];



const btn = document.getElementById("btn");
const span = document.getElementById("span");


btn.addEventListener("click", function () {
    const rendomNumber = getRendomNumber();

    document.body.style.backgroundColor = colors[rendomNumber];
    span.textContent = colors[rendomNumber];

});
function getRendomNumber() {
    return Math.floor(Math.random() * colors.length);

}
