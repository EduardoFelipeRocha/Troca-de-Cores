function muda() {
    let div = document.getElementById("cubo");
    div.style.backgroundColor = "red"
}
function volta() {
    let div = document.getElementById("cubo");
    div.style.backgroundColor = "green"
}
function aleatorio() {
    let div = document.getElementById("cubo");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}


