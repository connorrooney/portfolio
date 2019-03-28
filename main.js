const preLoad = document.getElementById("preLoad");
const afterLoad = document.getElementById("afterLoad");
const quickBar = document.getElementById("quickBar");
const main = document.getElementById("main");
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
const linked = document.getElementById("linked");
const drum = document.getElementById("drumKit");
const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weatherIcon");
const chat = document.getElementById("chat");
const flight = document.getElementById("flight");
const flightIcon = document.getElementById("flightIcon");
const todo = document.getElementById("todo");
const movie = document.getElementById("movie");
const social = document.getElementById("social");
const calc = document.getElementById("calc")


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
    main.style.display = "grid";
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
    let side = ["fas fa-dice-one drI", "fas fa-dice-two drI", "fas fa-dice-three drI", "fas fa-dice-four drI", "fas fa-dice-five drI", "fas fa-dice-six drI"];
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
        preLoad.className = "preload";
        preLoad.style.display = "block";
        batDeath.style.display = "none";
        batLv = 100;
        batLvTxt.textContent = batLv;
        batIcon.className = "fas fa-battery-full";
    }, 1500);
}

function batDisplay() {
    lock.className = "fas fa-lock lock"
    afterLoad.style.display = "none";
    main.style.display = "none";
    quickBar.style.display = "none";
    batDeath.style.display = "grid";
    miniR.removeEventListener("mouseenter", () => {
        countDwn = setInterval("batDrain()", 50);
    })
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
    toastIcon.className = "fab fa-github ghI";

})

gitHub.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

diceRoll.addEventListener("mouseenter", () => {
    diceRoller();
    toast.style.display = "block";
    toastTitle.textContent = "Dice Roller"
    toastDesc.textContent = "A dice rolling game avaliable in single and multi-player modes. Roll the dice and get to 20 to win!"
    toastIcon.className = "fas fa-dice-five drI";
})

diceRoll.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

moleWhack.addEventListener("mouseenter", () => {
    moleWhackIcon.className = "fas fa-gavel animated swing infinite";
    toast.style.display = "block";
    toastTitle.textContent = "Whack-A-Mole";
    toastDesc.textContent = "A JavaScript version of the classic arcade game. Each hit increases the difficulty, can you keep up?"
    toastIcon.className = "fas fa-gavel mhI"
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
    toastIcon.className = "fas fa-keyboard kcI"
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
    toastIcon.className = "fas fa-paw cbI";
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
    toastIcon.className = "far fa-envelope mlI"
})

mail.addEventListener("mouseleave", () => {
    mailIcon.className = "far fa-envelope";
    toast.style.display = "none";
})

jsClock.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "JavaScript Clock"
    toastDesc.textContent = "It tells the time and looks pretty, what else could you ask for?"
    toastIcon.className = "far fa-clock clI"
})

jsClock.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

linked.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "LinkedIn"
    toastDesc.textContent = "Checkout my LinkedIn here!"
    toastIcon.className = "fab fa-linkedin-in amI"
})

linked.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

drumKit.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "JavaScript Drum Kit"
    toastDesc.textContent = "A Simple Js Drumkit, use the keys or click to make music."
    toastIcon.className = "fas fa-drum dkI"
})

drumKit.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

weather.addEventListener("mouseenter", () => {
    weatherIcon.className = "fas fa-sun waI animated heartBeat slow infinite"
    toast.style.display = "block";
    toastTitle.textContent = "Weather Forecast"
    toastDesc.textContent = "An example of using an API to grab data from an external source, enter a location and get the current forecast"
    toastIcon.className = "fas fa-sun waI"
})

weather.addEventListener("mouseleave", () => {
    weatherIcon.className = "fas fa-sun waI"
    toast.style.display = "none";
})

chat.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "Simple Chat"
    toastDesc.textContent = "********************\n**WORK IN PROGRESS**\n********************";
    toastIcon.className = "far fa-comment-dots caI";
})

chat.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

flight.addEventListener("mouseenter",  () => {
    flightIcon.className = "fas fa-plane flI animated zoomOutRight"
    toast.style.display = "block";
    toastTitle.textContent = "Flight Radar"
    toastDesc.textContent = "A live flight tracker, planned, designed and build in 2 days as a part of a sprint challenge. Worked in a team of 3, using multiple API calls and React"
    toastIcon.className = "fas fa-plane flI"
})

flight.addEventListener("mouseleave", () => {
    flightIcon.className = "fas fa-plane flI animated zoomInLeft";
    toast.style.display = "none";
})

todo.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "To-Do List"
    toastDesc.textContent = "React Todo list, add and remove items.";
    toastIcon.className = "fas fa-clipboard-list tdI";
})

todo.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

movie.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "Movie Finder"
    toastDesc.textContent = "Node.js example of using API's and displaying to a webpage";
    toastIcon.className = "fas fa-film mvI";
})

movie.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})

social.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "Yellow Ducks"
    toastDesc.textContent = "React team project, lead by me, creating a social network, working in teams of 5, currently in progress, check the code out on GitHub.";
    toastIcon.className = "fas fa-code ydI";
})

social.addEventListener("mouseleave", () => {
    toast.style.display = "none"
})

calc.addEventListener("mouseenter", () => {
    toast.style.display = "block";
    toastTitle.textContent = "React Calculator"
    toastDesc.textContent = "Very Simple React calculator";
    toastIcon.className = "fas fa-calculator ccI";
})

calc.addEventListener("mouseleave", () => {
    toast.style.display = "none";
})