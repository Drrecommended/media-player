const music = document.querySelector("audio");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

//check if playing

let isPlayling = false;

// play the song

function playSong() {
  isPlayling = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute('title', 'pause')
  music.play();
}

//pause the song

function pauseSong() {
  isPlayling = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute('title', 'play')
  music.pause();
}

//play or pause event listener
playButton.addEventListener("click", () =>
  isPlayling ? pauseSong() : playSong()
);
