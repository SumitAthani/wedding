import React, {useState, useEffect} from "react";



const CountDown = () => {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      handelTimeLeft()
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  function handelTimeLeft(){

    var countDownDate = new Date("April 23, 2023 00:00:00").getTime();
    console.log("In handel time")
    var now = new Date().getTime();

    var distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ))
    setMinutes( Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    console.log(days,hours,minutes,seconds)

  }

  const styles = {
    countDown: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "black",
    },
  };
    // If the count down is over, write some text
    // if (distance < 0) {
    //   // clearInterval(x);
    //   document.getElementById("time").innerHTML =
    //     "Bless the married couple for happy life!";
    // }
 

  return <div style={styles.countDown}>countDown</div>;
}

export default CountDown



// var styles = [
//   "background: linear-gradient(#D33106, #571402)",
//   "border: 4px solid #3E0E02",
//   "color: white",
//   "display: block",
//   "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
//   "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
//   "line-height: 40px",
//   "text-align: center",
//   "font-weight: bold",
//   "font-size: 32px",
// ].join(";");

// var styles1 = [
//   "color: #FF6C37",
//   "display: block",
//   "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
//   "line-height: 40px",
//   "font-weight: bold",
//   "font-size: 32px",
// ].join(";");

// var styles2 = [
//   "color: teal",
//   "display: block",
//   "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
//   "line-height: 40px",
//   "font-weight: bold",
//   "font-size: 32px",
// ].join(";");
