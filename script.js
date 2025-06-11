// -------- Clock Logic --------
function updateClock() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  document.getElementById("clock").textContent = currentTime;
}

setInterval(updateClock, 1000);
updateClock(); // Show time immediately

// -------- Stopwatch Logic --------
let stopwatchInterval;
let totalSeconds = 0;

function updateStopwatch() {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      totalSeconds++;
      updateStopwatch();
    }, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  totalSeconds = 0;
  updateStopwatch();
}
