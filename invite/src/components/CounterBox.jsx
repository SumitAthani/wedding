import React, { useEffect, useState } from "react";

function CounterBox({ name, value }) {
  const [className, setClassName] = useState("counterBox");

  useEffect(() => {
    if (name.toLowerCase() === "days") {
      setClassName("counterBox days");
    }
    if (name.toLowerCase() === "hours") {
      setClassName("counterBox hours");
    }
    if (name.toLowerCase() === "mins") {
      setClassName("counterBox minutes");
    }
    if (name.toLowerCase() === "secs") {
      setClassName("counterBox seconds");
    }
  }, [className]);

  return (
    <div className={className}>
      <div>{name}</div>
      <div>{value}</div>
    </div>
  );
}

export default CounterBox;
