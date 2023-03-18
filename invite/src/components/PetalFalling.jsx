import React from "react";
import { Snow } from "react-snow-particle";

function PetalFalling() {
  const styles = {
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "black",
    },
  };

  return (
    <>
      <Snow color="#000000" particles="100" />
      {/* <Snow backgroundImage="https://firebasestorage.googleapis.com/v0/b/pinboard-25.appspot.com/o/ezgif.com-resize.gif?alt=media&token=12dae8c9-00d1-4fc8-9fff-5f1e8ba3e01d" color="#000000" particles = "200" /> */}
      <div style={styles.box}>petals</div>;
    </>
  );
}

export default PetalFalling;
