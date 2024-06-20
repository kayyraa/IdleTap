const Coin = document.getElementById("Coin");
const Counter = document.getElementById("Counter");

let Debounce = false;
let LocalClicks = 0;

Coin.addEventListener("click", function() {
    if (!Debounce) {
        Debounce = true;
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

if (localStorage.getItem("IDLE") === null) {
    localStorage.setItem("IDLE", 0);
} else {
    LocalClicks = parseInt(localStorage.getItem("IDLE"));
}

function Update() {
    Counter.innerHTML = `IDLE ${LocalClicks}`;
    localStorage.setItem("IDLE", parseInt(LocalClicks));
}

setInterval(Update, 1);