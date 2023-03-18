import React, { Component, useEffect, useState } from "react";
import muisc from "../assets/music/song.mp3";

function Music() {
  const [song, setSong] = useState();

  window.addEventListener("click", () => {
    setSong(song);
    song.play();
  });
  useEffect(() => {
    setSong(new Audio(muisc));
  }, []);

  return <div>Music</div>;
}

export default Music;
