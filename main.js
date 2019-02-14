const preLoad = document.getElementById("preLoad");
const afterLoad = document.getElementById("afterLoad")
const lock = document.getElementById("lock");
const clock = document.getElementById("clock");
const date = document.getElementById("date")

preLoad.addEventListener("click", () => {
    lockSwitch();
    setTimeout("display();", 500);
});

function lockSwitch() {
    lock.className = "fas fa-lock-open lock";

};

function display() {
    preLoad.style.display = "none";
    afterLoad.style.display = "block"
}

function pageSwitch() {

};

function clockDisplay() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let t = setTimeout(clockDisplay, 500);
    let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    m = checkTime(m);
    clock.textContent = h + ":" + m;
    date.textContent = dayArray[d.getDay()] + ' ' + d.getDate() + ' ' + monthArray[d.getMonth()];
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
