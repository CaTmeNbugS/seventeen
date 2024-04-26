let now_playing    = document.querySelector(".now-playing");
let track_art      = document.querySelector(".track-art");
let track_name     = document.querySelector(".track-name");
let track_artist   = document.querySelector(".track-artist");

let playpause_btn  = document.querySelector(".playpause-track");
let next_btn       = document.querySelector(".next-track");
let prev_btn       = document.querySelector(".prev-track");

let seek_slider    = document.querySelector(".seek_slider");
let volume_slider  = document.querySelector(".volume_slider");
let curr_time      = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let player         = document.querySelector('#player')

let track_index = 0;
let isPlaying   = false;
let showPlayer  = false
let updateTimer;

let curr_track = document.createElement('audio');

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
const musicBlock = document.querySelector('.musicBlock')
const albumBlock = document.querySelector('#albumBlock')

const faceTheSunAlbum = [
  {
    name: "Darl+ing",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/darling.mp3"
  },
  {
    name: "HOT",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/hot.mp3"
  },
  {
    name: "DON QUIXOTE",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/donquixote.mp3",
  },
  {
    name: "March",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/march.mp3",
  },
  {
    name: "Domino",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/domino.mp3",
  },
  {
    name: "Shadow",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/shadow.mp3",
  },
  {
    name: "'bout you",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/boutyou.mp3",
  },
  {
    name: "IF you leave me",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/ifyouloveme.mp3",
  },
  {
    name: "Ash",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png",
    path: "music/ash.mp3",
  },
]
const sector17        = [
  {
    name: "Circles",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/circles.mp3"
  },
  {
    name: "_World",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/world.mp3"
  },
  {
    name: "Fallin'Flower(Kor)",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/fallinflower.mp3 "
  },
  {
    name: "CHEERS",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/cheers.mp3"
  },
  {
    name: "Darl+ing",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/darling.mp3"
  },
  {
    name: "HOT",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/hot.mp3"
  },
  {
    name: "DON QUIXOTE",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/donquixote.mp3",
  },
  {
    name: "March",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/march.mp3",
  },
  {
    name: "Domino",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/domino.mp3",
  },
  {
    name: "Shadow",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/shadow.mp3",
  },
  {
    name: "'bout you",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/boutyou.mp3",
  },
  {
    name: "IF you leave me",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/ifyouloveme.mp3",
  },
  {
    name: "Ash",
    image: "https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png",
    path: "music/ash.mp3",
  },
]
const attacca         = [
  {
    name: "To you",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/toyou.mp3"
  },
  {
    name: "Rock with you",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/rockwithyou.mp3"
  },
  {
    name: "Crush",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/crush.mp3"
  },
  {
    name: "PANG!",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/pang.mp3"
  },
  {
    name: "Imperfect love",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/imperfectlove.mp3"
  },
  {
    name: "I can't run away",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/icantrunaway.mp3"
  },
  {
    name: "2 minus 1",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png",
    path: "music/minus.mp3",
  },
]
const anode           = [
  {
    name: "HIT",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/hit.mp3"
  },
  {
    name: "Lie Again",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/lieagain.mp3"
  },
  {
    name: "Fear",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/fear.mp3"
  },
  {
    name: "Let me hear you say",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/lmh.mp3"
  },
  {
    name: "247",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/247.mp3"
  },
  {
    name: "Second Life",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/secondlife.mp3"
  },
  {
    name: "Network Love",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/networklove.mp3",
  },
  {
    name: "Back it up",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/backitup.mp3",
  },
  {
    name: "Lucky",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/lucky.mp3",
  },
  {
    name: "Snap Shoot",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/snapshoot.mp3",
  },
  {
    name: "Happy Ending(kor)",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png",
    path: "music/happyending.mp3",
  },
]
const yourchoice      = [
  {
    name: "Heaven's Cloud",
    image: "https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg",
    path: "music/heavenscloud.mp3"
  },
  {
    name: "Ready to love",
    image: "https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg",
    path: "music/readytolove.mp3"
  },
  {
    name: "Anyone",
    image: "https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg",
    path: "music/anyone.mp3"
  },
  {
    name: "GAM3 BO1",
    image: "https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg",
    path: "music/gam3bo1.mp3"
  },
  {
    name: "Wave",
    image: "https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg",
    path: "music/wave.mp3"
  },
  {
    name: "Same dream, same mind, same night",
    image: "https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg",
    path: "music/sss.mp3"
  },
]
const fml             = [
  {
    name: "F*ck my Life",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png",
    path: "music/fckmylife.mp3"
  },
  {
    name: "Super",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png",
    path: "music/super.mp3"
  },
  {
    name: "Fire",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png",
    path: "music/fire.mp3"
  },
  {
    name: "I Don't understend But I Luv U",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png",
    path: "music/1.mp3"
  },
  {
    name: "Dust",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png",
    path: "music/dust.mp3"
  },
  {
    name: "April shower",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png",
    path: "music/aprilshower.mp3"
  },
]


const albums       = [
  {
    name: 'Face the Sun',
    img: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Seventeen_-_Face_the_Sun.png'
  },
  {
    name: 'SECTOR 17',
    img: 'https://images.genius.com/ca9452b9666516d9a3e3a7d28caf9b54.1000x1000x1.png'
  },
  {
    name: 'Attacca',
    img: 'https://upload.wikimedia.org/wikipedia/en/7/75/Seventeen_-_Attacca.png'
  },
  {
    name: 'An Ode',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Seventeen_-_An_Ode.png/220px-Seventeen_-_An_Ode.png'
  },
  {
    name: 'Your Choice',
    img: 'https://cdns-images.dzcdn.net/images/cover/30d64905780693d55447d54abfb117e2/500x500.jpg'
  },
  {
    name: 'FML',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seventeen_-_FML.png/220px-Seventeen_-_FML.png'
  },
]
const albumsTracks = [
  faceTheSunAlbum,
  sector17,
  attacca,
  anode,
  yourchoice,
  fml,
]



for(let i = 0; i < albums.length; i++){
  albumBlock.innerHTML += `
  <div onclick="playAlbum(${i})" class="album">
    <div class="albumBtnBlock">
      <i style="font-size: 35px;" class="fa fa-play-circle fa-3x musicBtn"></i>
    </div>
    <img src="${albums[i].img}">
    <div class="albumName">${albums[i].name}</div>
  </div>
  `
}


function showVolume(){
  volumeBlock.classList.toggle('hidden')
}
function hiddenVolume(){
  volumeBlock.classList.remove('hidden')
}
function renderTracks(){
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
}
function play(i){
  loadTrack(i)
  playTrack()
}
function playAlbum(album){
  musicBlock.classList.add('loading')
  setTimeout(() => {
    track_list = albumsTracks[album]
    musicBlock.innerHTML = ''
    renderTracks()
  }, 250)
  setTimeout(() => {
    musicBlock.classList.remove('loading')
  }, 500)
  console.log(album)
}