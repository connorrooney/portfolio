const preLoad = document.getElementById("preLoad");
<<<<<<< HEAD
const afterLoad = document.getElementById("afterLoad");
const quickBar = document.getElementById("quickBar");
const lock = document.getElementById("lock");
const clock = document.getElementById("clock");
const date = document.getElementById("date");
const toast = document.getElementById("toast");
const close = document.getElementById("close");
=======
const afterLoad = document.getElementById("afterLoad")
const lock = document.getElementById("lock");
const clock = document.getElementById("clock");
const date = document.getElementById("date")
const toast = document.getElementById("toast");
>>>>>>> 865b8950125c9779f30aaaec11365a881622bd82

const gitHub = document.getElementById("gitHub");


//"Lock Screen" activator
preLoad.addEventListener("click", () => {
    document.head.title.textContent = "Connor Rooney"
    lock.className = "fas fa-lock-open lock";
    setTimeout("display()", 250)
});

//Clock and Date display
function display() {
    preLoad.className = "preLoad animated fadeOutUpBig slower"
    setTimeout(() => {preLoad.style.display = "none"}, 100)
<<<<<<< HEAD
    afterLoad.style.display = "block";
    quickBar.style.display = "block";
=======
    afterLoad.style.display = "block"
>>>>>>> 865b8950125c9779f30aaaec11365a881622bd82
}

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


//Tool Tips
<<<<<<< HEAD
function intro() {
    intro.style.display = "block";
    setTimeout( () => {
        intro.style.display = "none"
    }, 7000);
}

close.addEventListener("click", () => {
    toast.style.display = "none";
})
=======
>>>>>>> 865b8950125c9779f30aaaec11365a881622bd82

gitHub.addEventListener("mouseover", () => {
    toast.style.display = "block";
})

gitHub.addEventListener("mouseout", () => {
    toast.style.display = "none";
})