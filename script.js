let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = 1;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = 1;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    const lapTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    const lapItem = document.createElement("li");
    lapItem.textContent = "Lap " + laps + ": " + lapTime;
    document.getElementById("laps").appendChild(lapItem);
    laps++;
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector(".display").textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.flexDirection = "column";
