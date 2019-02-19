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

const miniR = document.getElementById("miniR");
let batLv = 100;
const batLvTxt = document.getElementById("eeBatLevel");
const batIcon = document.getElementById("eeBat");
const batDeath = document.getElementById("batDeath");
const batDeathBat = document.getElementById("batDeathBat");

const gitHub = document.getElementById("gitHub");
const mail = document.getElementById("mail");
const mailIcon = document.getElementById("mailIcon");
const diceRoll = document.getElementById("diceRoll");
const diceRollIcon = document.getElementById("diceRollTx");
const moleWhack = document.getElementById("whackAmole");
const moleWhackIcon = document.getElementById("hammer");
const keyCode = document.getElementById("keyCode");
const keyCodeIcon = document.getElementById("keyCodeIcon");
const cyberPet = document.getElementById("cyberPet");
const cyberPetIcon = document.getElementById("cyberPetIcon");
const jsClock = document.getElementById("jsClock");
const forager = document.getElementById("forager");

batLvTxt.textContent = batLv;

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

//Easter Eggs
let countDwn;

function batDrain() {
    if(batLv > 0){
        batLv--;
        batLvTxt.textContent = batLv;
        batIconSw();
    } else {
        batDisplay();
        batDeathIcon();
    }
}

function batIconSw() {
    if(batLv >= 75) {
        batIcon.className = "fas fa-battery-full";
    } else if (batLv >= 50 ) {
        batIcon.className = "fas fa-battery-three-quarters";
    } else if (batLv >= 25 ) {
        batIcon.className = "fas fa-battery-half";
    } else if (batLv >= 5 ) {
        batIcon.className = "fas fa-battery-quarter";
    } else if (batLv >= 4 ) {
        batIcon.className = "fas fa-battery-empty";
    }
}

function batDeathIcon() {
    batDeathBat.className = "fas fa-battery-empty animated flash"
    setTimeout(() => {batDeathBat.className = "fas fa-battery-quarter"}, 500);
    setTimeout(() => {batDeathBat.className = "fas fa-battery-half"}, 750);
    setTimeout(() => {batDeathBat.className = "fas fa-battery-three-quarters"}, 1000);
    setTimeout(() => {batDeathBat.className = "fas fa-battery-full"}, 1250);
    setTimeout(() => {
        preLoad.style.display = "block";
        batDeath.style.display = "none";
        batLv = 100;
        batLvTxt.textContent = batLv;
        batIcon.className = "fas fa-battery-full";
    }, 1500);
}

function batDisplay() {
    quickBar.style.display = "none";
    batDeath.style.display = "grid";
}

miniR.addEventListener("mouseenter", () => {
    countDwn = setInterval("batDrain()", 50);
})
    

miniR.addEventListener("mouseleave", () => {
    clearInterval(countDwn);
})

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
    toastTitle.textContent = "My GitHub"; 
    toastDesc.textContent = "Check out all my public repositories on my GitHub page.";
    toastIcon.className = "fab fa-github";

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
    keyCodeIcon.className = "fas fa-keyboard"
    toast.style.display = "block";
    toastTitle.textContent = "KeyCode Generator";
    toastDesc.textContent = "Simple KeyCode generator, Input a key and it will return with the event codes."
    toastIcon.className = "fas fa-keyboard"
})

keyCode.addEventListener("mouseleave", () => {
    keyCodeIcon.className = "far fa-keyboard"
    toast.style.display = "none";
})

cyberPet.addEventListener("mouseenter", () => {
    cyberPetIcon.className = "fas fa-paw animated tada slow infinite";
    toast.style.display =  "block";
    toastTitle.textContent = "My Cyber Pet";
    toastDesc.textContent = "Your very own virtual pet. Use console commands to take care of your pet. Keep them alive for as long as possible.";
    toastIcon.className = "fas fa-paw";
})

cyberPet.addEventListener("mouseleave", () => {
    cyberPetIcon.className = "fas fa-paw";
    toast.style.display = "none"
})

mail.addEventListener("mouseenter", () => {
    mailIcon.className = "far fa-envelope-open";
    toast.style.display = "block";
    toastTitle.textContent = "Get in touch"
    toastDesc.textContent = "If you have any questions about me or my work please email me by clicking the link."
    toastIcon.className = "far fa-envelope"
})

mail.addEventListener("mouseleave", () => {
    mailIcon.className = "far fa-envelope";
    toast.style.display = "none";
})

jsClock.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "JavaScript Clock"
    toastDesc.textContent = "It tells the time and looks pretty, what else could you ask for?"
    toastIcon.className = "far fa-clock"
})

jsClock.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

forager.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "forager"
    toastDesc.textContent = "Coming Soon"
    toastIcon.className = "fas fa-gem"
})

forager.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})