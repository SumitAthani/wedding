import React, { useState, useEffect } from "react";
import "../css/CountDown.css";
import CounterBox from "./CounterBox";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("This will run every second!");
      handelTimeLeft();
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  function handelTimeLeft() {
    var countDownDate = new Date("April 23, 2023 00:00:00").getTime();
    // console.log("In handel time");
    var now = new Date().getTime();

    var distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    // console.log(days, hours, minutes, seconds);
  }

  // If the count down is over, write some text
  // if (distance < 0) {
  //   // clearInterval(x);
  //   document.getElementById("time").innerHTML =
  //     "Bless the married couple for happy life!";
  // }

  return (
    <div className="countDownContainer">
      <CounterBox name="Days" value={days} />
      <CounterBox name="Hours" value={hours} />
      <CounterBox name="Mins" value={minutes} />
      <CounterBox name="Secs" value={seconds} />
    </div>
  );
};

export default CountDown;
