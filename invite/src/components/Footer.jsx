import React, { useEffect } from "react";
import lottie from "lottie-web";
import cat from "../assets/animation/catMeow.json";
import "../css/footer.css"

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
                <div id="cat-animation" style={{ width: 100, height: 75, marginTop: -10, marginLeft: -15 }} />
                <div className="footerText">
                    <h1>Do Join us and make our day Blissful !</h1> </div>
            </div>
        </>
    );
}
