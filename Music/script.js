const songs = [
    "Shiddat Title Track.mp3",
    "Andaz-Zindagi Ek Safar Hai.mp3",
    "Believer Mp3 Imagine Dragons.mp3",
    "bijlee-bijlee-harrdy-sandhu.mp3",
    "Raataan Lambiyan.mp3",
    "Rockabye.mp3",
   
  ];
  
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
  songList.onclick = function (e) {
  const source = document.getElementById("source");

  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;
  
  source.src = "songs/" + e.target.innerText;
  const player = document.getElementById("player");
  player.load();
  player.play();
};