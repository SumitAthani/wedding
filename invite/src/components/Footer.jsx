import React, { useEffect } from "react";
import lottie from "lottie-web";
import cat from "../assets/animation/catMeow.json";

export default function Footer() {
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#cat-animation"),
      animationData: cat,
      loop: true, // boolean
      autoplay: true, // boolean
    });
    return () => instance.destroy();
  }, []);

  return (
    <>
      <div className="footer">
        {/* <p>This is some content in sticky footer</p> */}
        <div id="cat-animation" style={{ width: "20%", height: "20%" }} />
      </div>
    </>
  );
}
