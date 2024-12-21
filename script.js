// Get elements
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const audioPlayer = document.getElementById("audioPlayer");
const songItems = document.querySelectorAll(".song");

let currentSong = null;

// Event listener for song selection
songItems.forEach(item => {
    item.addEventListener("click", () => {
        const songPath = item.getAttribute("data-song");
        audioPlayer.src = songPath;
        playMusic();
    });
});

// Play music function
function playMusic() {
    if (audioPlayer.src) {
        audioPlayer.play();
        playBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
    }
}

// Pause music function
function pauseMusic() {
    audioPlayer.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Stop music function
function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
}

// Button event listeners
playBtn.addEventListener("click", playMusic);
pauseBtn.addEventListener("click", pauseMusic);
stopBtn.addEventListener("click", stopMusic);
