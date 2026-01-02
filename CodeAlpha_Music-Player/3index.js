var song = document.getElementById("song");
var progress = document.getElementById("progress");
var ctrl = document.getElementById("ctrlicon");
var volume = document.getElementById("volume");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var songImg = document.getElementById("songImg");
var songTitle = document.getElementById("songTitle");
var songArtist = document.getElementById("songArtist");

var playlist = [
    {
        title: "Eetti Theme",
        artist: "GV Prakash",
        src: "EykjRD1YBVk.mp3",
        img: "Eetti.webp"
    },
    {
        title: "Powerhouse",
        artist: "Anirudh",
        src: "Powerhouse.mp3",
        img: "coolie.webp"
    },
    {
        title: "Thalapathy Kacheri",
        artist: "Anirudh",
        src: "Thalapathy_Kacheri.mp3",
        img: "jana.webp"
    }
];

let currentSong = 0;

function loadSong(index) {
    song.src = playlist[index].src;
    songImg.src = playlist[index].img;
    songTitle.textContent = playlist[index].title;
    songArtist.textContent = playlist[index].artist;
    song.load();
}

loadSong(currentSong);

ctrl.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        ctrl.classList.replace("fa-play", "fa-pause");
    } else {
        song.pause();
        ctrl.classList.replace("fa-pause", "fa-play");
    }
});


song.addEventListener("loadedmetadata", () => {
    progress.max = song.duration;
});

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

volume.addEventListener("input", () => {
    song.volume = volume.value / 100;
});

forward.addEventListener("click", () => {
    currentSong = (currentSong + 1) % playlist.length;
    loadSong(currentSong);
    song.play();
    ctrl.classList.replace("fa-play", "fa-pause");
});

backward.addEventListener("click", () => {
    currentSong =
        (currentSong - 1 + playlist.length) % playlist.length;
    loadSong(currentSong);
    song.play();
    ctrl.classList.replace("fa-play", "fa-pause");
});

song.addEventListener("ended", () => {
    forward.click();
});
