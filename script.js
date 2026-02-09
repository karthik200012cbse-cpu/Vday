const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusicBtn");
const finalText = document.getElementById("finalText");

let playing = false;

playBtn.addEventListener("click", () => {
  if (!playing) {
    music.volume = 0.4;
    music.play();
    playBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    playBtn.textContent = "▶ Play Music";
  }
  playing = !playing;
});

function yes() {
  finalText.textContent = "I knew it. I always do.";
  finalText.style.opacity = 1;
}
