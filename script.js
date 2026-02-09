const screens = document.querySelectorAll('.screen');
let current = 0;

const music = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');
const startBtn = document.getElementById('startBtn');

startBtn.onclick = () => {
  music.play();
  nextScreen();
};

toggle.onclick = () => {
  music.paused ? music.play() : music.pause();
};

function nextScreen() {
  screens[current].classList.remove('active');
  current++;
  if (screens[current]) {
    screens[current].classList.add('active');
  }
}

document.body.addEventListener('click', () => {
  if (current > 0 && current < screens.length - 1) {
    nextScreen();
  }
});
