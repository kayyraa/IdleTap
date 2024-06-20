const App = document.getElementById("App");
const Divs = App.getElementsByTagName("div");

const Coin = document.getElementById("Coin");
const Counter = document.getElementById("Counter");
const Cursor = document.getElementById("Cursor");

let Debounce = false;
let LocalClicks = 0;
let LocalBonuses = 0;

document.addEventListener("mouseleave", function() {
    Cursor.style.opacity = "0";
});
document.addEventListener("mouseenter", function() {
    Cursor.style.opacity = "1";
});
document.addEventListener("mousemove", function(Event) {
    Cursor.style.left = Event.clientX + 2 + "px";
    Cursor.style.top = Event.clientY + 2 + "px";
});

Coin.addEventListener("click", function() {
    if (!Debounce) {
        Debounce = true;
        let Chance = Math.floor(Math.random() * 11)
        if (Chance === 4) {
            LocalClicks += 2;
            LocalBonuses++;
            setTimeout(() => {
                Counter.style.fontSize = "72px";
            }, 250);
            setTimeout(() => {
                Counter.style.fontSize = "64px";
            }, 250);
        }
        Coin.style.width = "12.5%";
        setTimeout(() => {
            Coin.style.width = "10%";
        }, 125);
        setTimeout(() => {
            Debounce = false;
        }, 175);
        LocalClicks++;
    }
});

Coin.addEventListener("mouseenter", function() {
    Cursor.style.width = "28px";
});
Coin.addEventListener("mouseleave", function() {
    Cursor.style.width = "24px";
});

if (localStorage.getItem("IDLE") === null) {
    localStorage.setItem("IDLE", 0);
} else {
    LocalClicks = parseInt(localStorage.getItem("IDLE"));
}

if (localStorage.getItem("BONUS") === null) {
    localStorage.setItem("BONUS", 0);
} else {
    LocalBonuses = parseInt(localStorage.getItem("BONUS"));
}

function Update() {
    Counter.innerHTML = `IDLE ${LocalClicks}`;
    localStorage.setItem("IDLE", LocalClicks);
    localStorage.setItem("BONUS", LocalBonuses);
}

setInterval(Update, 1);