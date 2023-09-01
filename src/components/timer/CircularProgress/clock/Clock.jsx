import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { StateContext } from "../../StateProvider";
const Clock = () => {
  const { time, setTime, isActive, setIsActive, initTime } =
    useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const toggleClock = () => {
    setIsActive(!isActive);
  };

  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
  };
  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPause onClick={toggleClock}>
        {isActive ? "pause" : "start"}
      </StartPause>
      {time == 0 && <ReserButton onClick={resetTime}>Reset</ReserButton>}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;
const TimerText = styled.h3`
  font-size: 10rem;
`;
const StartPause = styled.button`
  all: unset;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`;

const ReserButton = styled(StartPause)`
  color: red;
`;
