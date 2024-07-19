import React, { useState, useEffect } from "react";
import clockTick from "./clockTick.mp3";

function Timer({ data }) {
  const dateOfBirth = new Date(data.dateOfBirth);
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(
    Math.floor(Date.now() / 1000),
  );

  const lifeLivedInSeconds =
    currentTimeInSeconds - dateOfBirth.getTime() / 1000;
  const lifeExpectancyInSeconds = data.lifeExpectancy * 365 * 24 * 60 * 60;
  const lifeLeftInSeconds = lifeExpectancyInSeconds - lifeLivedInSeconds;

  const lifeLeftInSecondsString = lifeLeftInSeconds.toString();

  const formatWithCommas = (numStr) => {
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const lifeLeftToDisplay = formatWithCommas(lifeLeftInSecondsString);

  useEffect(() => {
    const audio = new Audio(clockTick); // Use the imported path
    const interval = setInterval(() => {
      setCurrentTimeInSeconds(Math.floor(Date.now() / 1000));
      audio.play();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{lifeLeftToDisplay}</h1>
    </div>
  );
}

export default Timer;
