let timer;
let isRunning = false;
let remainingTime;
let pomodoroLength = 25 * 60;
let display = document.getElementById('timer-display');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let pomodoroLengthInput = document.getElementById('pomodoro-length');

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    if (isRunning) return; 
    isRunning = true;
    remainingTime = pomodoroLength;
    timer = setInterval(() => {
        remainingTime--;
        display.textContent = formatTime(remainingTime);
      
        if (remainingTime <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert("Pomodoro Complete!");
        }
    }, 1000);
}
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    display.textContent = formatTime(pomodoroLength);
}
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
pomodoroLengthInput.addEventListener('input', (e) => {
    pomodoroLength = e.target.value * 60;
    resetTimer();  
});
display.textContent = formatTime(pomodoroLength);