let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStop").innerText = "Stop";
    }

    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").innerText = "Start";
}

function updateDisplay() {
    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const display = document.getElementById("display");
    display.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
}

function pad(value, length = 2) {
    let paddedValue = value.toString();
    while (paddedValue.length < length) {
        paddedValue = "0" + paddedValue;
    }
    return paddedValue;
}
