import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Grid } from "@material-ui/core";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  strokeWidth: 6,
  size: 120,
  trailColor: "#FFFFFF",
};

const renderTime = (dimension, time) => {
  return (
    <div>
      <div className="time">{time}</div>
      <div style={{ color: "white" }}>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Countdown() {
  const stratTime = Date.now() / 1000;
  const endTime = Date.parse("March, 01, 2022, 00:00 am") / 1000;

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  useEffect(() => {
    const RD = Math.floor(remainingTime / 86400);
    document.title = RD + " days left";
  });

  return (
    <div className="App">
      <Grid container spacing={3} justify="center" alignItems="center">
        <div className="space">
          <Grid item md={3} sm={3} xs={12}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#000000"]]}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime }) =>
                renderTime("days", getTimeDays(daysDuration - elapsedTime))
              }
            </CountdownCircleTimer>
          </Grid>
        </div>

        <div className="space">
          <Grid item md={3} sm={3} xs={12}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#000000"]]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > hourSeconds,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("hours", getTimeHours(daySeconds - elapsedTime))
              }
            </CountdownCircleTimer>
          </Grid>
        </div>

        <div className="space">
          <Grid item md={3} sm={3} xs={12}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#000000"]]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > minuteSeconds,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
              }
            </CountdownCircleTimer>
          </Grid>
        </div>

        <div className="space">
          <Grid item md={3} sm={3} xs={12}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#000000"]]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > 0,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("seconds", getTimeSeconds(elapsedTime))
              }
            </CountdownCircleTimer>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
