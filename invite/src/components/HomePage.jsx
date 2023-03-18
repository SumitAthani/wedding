import React from 'react'
import backgroundImage from "../assets/background.JPG";


export default function HomePage() {

    const styles = {
        backgroungImage: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          postion: "relative",
        },
    }
  return (
    <div  style={styles.backgroungImage}>HomePage</div>
  )


}
