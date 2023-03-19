import React from 'react'
import backgroundImage from "../assets/background.JPG";
import { Snow } from 'react-snow-particle/lib';

export default function HomePage() {

    const styles = {
        backgroungImage: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            height: "62vh",
            width: "100vw",
            backgroundSize: "cover",
            postion: "relative",
            opacity: 0.5,
            overflow: "hidden"

            //   alpha: 0.7,

        },
        backgroundColor: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
        },

    }
    return (
        <>

            <div style={styles.backgroundColor}>
                <div style={styles.backgroungImage}>
                </div>
            </div>
        </>

    )


}
