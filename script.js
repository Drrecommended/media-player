const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

//Music
const songs = [
  {
    name: "Fantastic Man - Won't Somebody Think of the Children",
    displayName: "Won't Somebody Think of the Children",
    artist: "Fantastic Man",
  },
  {
    name: "Luca Lozano - BIOHAZARD",
    displayName: "BIOHAZARD",
    artist: "Luca Lozano",
  },
  {
    name: "Marlon Hoffstadt - To All Believers",
    displayName: "To All The Believers",
    artist: "Marlon Hoffstadt",
  },
  {
    name: "New Members - Deep In The Night",
    displayName: "Deep In The Night",
    artist: "New Members",
  },
];

//check if playing

let isPlayling = false;

// play the song

function playSong() {
  isPlayling = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "pause");
  music.play();
}

//pause the song

function pauseSong() {
  isPlayling = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "play");
  music.pause();
}

//play or pause event listener
playButton.addEventListener("click", () =>
  isPlayling ? pauseSong() : playSong()
);

// Update DOM

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//on load select first song

loadSong(songs[3]);


// event listeners 
prevButton.addEventListener('click', prevSong)
nextButton.addEventListener('click', nextSong)
