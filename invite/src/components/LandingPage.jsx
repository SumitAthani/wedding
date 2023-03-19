import React from "react";
import { Snow } from "react-snow-particle/lib";
import flowerImageLeft from "../assets/leftFlower.png";
import flowerImageRight from "../assets/rightFlower.png";
import "../css/LandingPage.css";
import CountDown from "./CountDown";

export default function LandingPage() {
  return (
    <>
      <div className="landingPageWrapper">
        <Snow color="#000000" particles="100" />
        <div className="flowerWrapper">
          <img src={flowerImageLeft} className="top-left-decoration" />
          <img src={flowerImageRight} className="top-right-decoration" />
        </div>
        <div className="wrap">
          <div className="title">
            <h1>Sushma </h1>
            <h2>&</h2>
            <h1>Ganesh</h1>
            <h3>Are getting married</h3>
            <p>
              on <span className="date">23 April 2023</span>, At{" "}
              <span className="place">KPTCL Hall</span> Belgaum, Karnataka
            </p>
          </div>
        </div>

        <div className="countDownWrapper">
          <CountDown />
        </div>
      </div>
    </>
  );
}
