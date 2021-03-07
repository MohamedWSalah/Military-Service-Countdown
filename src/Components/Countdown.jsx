import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      const time =
        Date.parse("March, 01, 2022, 7:00 am") - Date.parse(new Date());
      if (time < 0) {
        setTimeLeft({
          ...timeLeft,
          days: 0,
          hours: 0,
          mins: 0,
          seconds: 0,
        });
      } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        //const months = Math.floor(time / (1000 * 60 * 60 * 24 * 7 * 4));
        setTimeLeft({
          ...timeLeft,
          days: days,
          hours: hours,
          mins: minutes,
          seconds: seconds,
        });
      }
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <h1>{timeLeft.days}</h1>
      <h1>{timeLeft.hours}</h1>
      <h1>{timeLeft.mins}</h1>
      <h1>{timeLeft.seconds}</h1>
    </React.Fragment>
  );
}

export default Countdown;
