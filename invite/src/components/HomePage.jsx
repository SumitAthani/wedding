import React from 'react'
import backgroundImage from "../assets/background.JPG";


export default function HomePage() {
  return (
    <div>HomePage</div>
  )

  const styles = {
    countDown: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100vw",
    },
}
}
