import { useState } from "react";
import music from "../assets/music/song.mp3";

function Music() {
  const [song, setSong] = useState(new Audio(music));

  window.addEventListener("click", () => {
    setSong(song);
    song.play();
  });
}

export default Music;
