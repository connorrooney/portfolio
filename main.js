const preLoad = document.getElementById("preLoad");
const afterLoad = document.getElementById("afterLoad");
const quickBar = document.getElementById("quickBar");
const lock = document.getElementById("lock");
const clock = document.getElementById("clock");
const date = document.getElementById("date");
const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastDesc = document.getElementById("toastDesc");
const toastIcon = document.getElementById("toastIcon")
const close = document.getElementById("close");

const gitHub = document.getElementById("gitHub");
const mail = document.getElementById("mail")
const
const diceRoll = document.getElementById("diceRoll");
const diceRollIcon = document.getElementById("diceRollTx");
const moleWhack = document.getElementById("whackAmole");
const moleWhackIcon = document.getElementById("hammer");
const keyCode = document.getElementById("keyCode");
const cyberPet = document.getElementById("cyberPet");



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
    afterLoad.style.display = "block";
    quickBar.style.display = "block";
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

//App Animations
function diceRoller() {
    let roll = Math.floor(Math.random() * 6);
    let side = ["fas fa-dice-one", "fas fa-dice-two", "fas fa-dice-three", "fas fa-dice-four", "fas fa-dice-five", "fas fa-dice-six"];
    diceRollIcon.className = side[roll];
    return side[roll];
}

function whackAmole() {

}

//Tool Tips
function intro() {
    toast.style.display = "block";
    
    setTimeout( () => {
        intro.style.display = "none"
    }, 7000);
}

close.addEventListener("click", () => {
    toast.style.display = "none";
})

gitHub.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastDesc.textContent = "This is some differnt contenet to test is it works";
    toastIcon.className = "fab fa-github";
    toastTitle.textContent = "My GitHub"
})

gitHub.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

diceRoll.addEventListener("mouseenter", () => {
    diceRoller();
    toast.style.display = "block";
    toastTitle.textContent = "Dice Roller"
    toastDesc.textContent = "A dice rolling game avaliable in single and multi-player modes. Roll the dice and get to 20 to win!"
    toastIcon.className = "fas fa-dice-five";
})

diceRoll.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

moleWhack.addEventListener("mouseenter", () => {
    moleWhackIcon.className = "fas fa-gavel animated swing infinite";
    toast.style.display = "block";
    toastTitle.textContent = "Whack-A-Mole";
    toastDesc.textContent = "A JavaScript version of the classic arcade game. Each hit increases the difficulty, can you keep up?"
    toastIcon.className = "fas fa-gavel"
})

moleWhack.addEventListener("mouseleave", () => {
    moleWhackIcon.className = "fas fa-gavel";
    toast.style.display = "none";
})

keyCode.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "KeyCode Generator";
    toastDesc.textContent = "Simple KeyCode generator, Input a key and it will return with the event codes."
    toastIcon.className = "fas fa-keyboard"
})

keyCode.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

cyberPet.addEventListener("mouseenter", () => {
    toast.style.display =  "block";
    toastTitle.textContent = "My Cyber Pet";
    toastDesc.textContent = "Your very own virtual pet. Use console commands to take care of your pet. Keep them alive for as long as possible.";
    toastIcon.className = "fas fa-paw";
})

cyberPet.addEventListener("mouseleave", () => {
    toast.style.display = "none"
})

mail.addEventListener("mouseenter", () => {

})