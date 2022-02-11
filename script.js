const songs = [
    "Shiddat Title Track.mp3",
    "Andaz-Zindagi Ek Safar Hai.mp3",
    "Believer Mp3 Imagine Dragons.mp3",
    "bijlee-bijlee-harrdy-sandhu.mp3",
    "Raataan Lambiyan.mp3",
    "Rockabye.mp3",
    "Sajna.mp3"
   
  ];

  const player = document.getElementById("player");
  
  const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(songs[i]));
      list.appendChild(item);
    }
    return list;
  };

  
  const songList = document.getElementById("songList");
  songList.appendChild(createSongList());


  const links = document.querySelectorAll("li");
  for (const link of links) {
  link.addEventListener("click", setSong);
}

function setSong(e) {
    document.querySelector("#headphones").classList.remove("pulse");
  const source = document.getElementById("source");

  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;

  source.src = "songs/" + e.target.innerText;
 
  player.load();
  player.play();

  document.querySelector("#headphones").classList.add("pulse");
};

function playAudio() {
    if (player.readyState) {
      player.play();
    }
  }
  
  function pauseAudio() {
    player.pause();
  }

  const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
};


function updateProgress() {
    if (player.currentTime > 0) {
      const progressBar = document.getElementById("progress");
      progressBar.value = (player.currentTime / player.duration) * 100;
    }
  }



