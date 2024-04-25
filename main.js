let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let player = document.querySelector('#player')

let track_index = 0;
let isPlaying = false;
let showPlayer = false
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Super",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/super.mp3"
  },
  {
    name: "CHEERS",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/cheers.mp3"
  },
  {
    name: "Fire",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/fire.mp3",
  },
  {
    name: "God of music",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/godofmusic.mp3",
  },
  {
    name: "Hot",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/hot.mp3",
  },
  {
    name: "Shadow",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/shadow.mp3",
  },
  {
    name: "Very nice",
    image: "//avatars.yandex.net/get-music-content/5485872/447cad5d.a.19608883-1/200x200",
    path: "music/verynice.mp3",
  },
];

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
    if(!showPlayer){
        showPlayer = true
        player.classList.add('visiblePlayer')
    }
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i style="font-size: 35px;" class="fa fa-pause-circle fa-3x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i style="font-size: 35px;" class="fa fa-play-circle fa-3x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

const volumeBlock = document.querySelector('.volumeBlock')

function showVolume(){
    volumeBlock.classList.toggle('hidden')
}
function hiddenVolume(){
    volumeBlock.classList.remove('hidden')
}

const musicBlock = document.querySelector('.musicBlock')

for(let i = 0; i < track_list.length; i++){
    musicBlock.innerHTML += `
        <div onclick="play(${i})"class="music">
            <div class="musicImg">
                <img src="${track_list[i].image}">
                <i style="font-size: 35px;" class="fa fa-play-circle fa-3x musicBtn"></i>
            </div>
            <div class="musicName">${track_list[i].name}</div>
        </div>
    `
}
function play(i){
    loadTrack(i)
    playTrack()
}