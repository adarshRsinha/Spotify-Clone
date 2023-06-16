console.log('Welcome to Spotify')

//Initialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songName: "Unstoppable", filePath: "Sia_Unstoppable.mp3", coverPath: "covers/1.jpg" },
    { songName: "Bulleya", filePath: "songs/Bheegi Si Bhaagi Si.mp3", coverPath: "covers/4Bulleya.jpg" },
    { songName: "Dildaara (Stand By Me)", filePath: "songs/Dildaara (Stand By Me).mp3", coverPath: "covers/5dildaara.jpg" },
    { songName: "Ek Zindagi", filePath: "songs/Ek Zindagi - Angrezi Medium (SongsMp3.Com).mp3", coverPath: "covers/6Ek-Zindagi.jpg" },
    { songName: "Ghungroo", filePath: "songs/Ghungroo - DownloadMing.SE.mp3", coverPath: "covers/8Ghungroo-War.jpg" },
    { songName: "First Kiss", filePath: "songs/First Kiss (128 Kbps).mp3", coverPath: "covers/7First-Kiss.jpg" },
    { songName: "Jai Jai Shivshankar", filePath: "songs/Jai Jai Shivshankar - DownloadMing.SE.mp3", coverPath: "covers/8Ghungroo-War.jpg" },
    { songName: "She Dont Know", filePath: "songs/She Dont Know - Millind Gaba (SongsMp3.Com).mp3", coverPath: "covers/11She-Don-t-Know.jpg" },
]

// let songs = [
//     {songName: "Bheegi Si Bhaagi Si", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "Bulleya", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "Dildaara (Stand By Me)", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "Ek Zindagi", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "Ghungroo", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "First Kiss", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "Jai Jai Shivshankar", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
//     {songName: "She Dont Know", filePath: "Sia_Unstoppable.mp3", coverPath: "sia_cover.jpg"},
// ]

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid fa-pause");
        masterPlay.classList.add("fa-solid fa-play");
    }
})

audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})










