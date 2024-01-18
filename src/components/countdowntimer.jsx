import { useEffect, useRef, useState } from "react";
import { COUNT_DOWN_TIME } from "../constants";
import { Minionanimation } from "./minionanimation";

export const CountDownTimer = ({ setIsCountdownEnded }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinute, setTimerMinute] = useState("00");
  const [timerSecond, setTimerSecond] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = COUNT_DOWN_TIME - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setIsCountdownEnded(true);
      } else {
        setTimerDays(days < 10 ? `0${days}` : String(days));
        setTimerHours(hours < 10 ? `0${hours}` : String(hours));
        setTimerMinute(minutes < 10 ? `0${minutes}` : String(minutes));
        setTimerSecond(seconds < 10 ? `0${seconds}` : String(seconds));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <section className="timer-container">
        <section className="timer">
          {/* <div>
            <span className="fas fa-calendar"> </span>
             <h2>Countdown timer</h2>
            <p>countdown time tex†</p>
          </div> */}
            <section>
              <h3>{timerDays}</h3>
              <p>
                <small>Days</small>
              </p>
            </section>
            {/* <span>:</span> */}
            <section>
              <h3>{timerHours}</h3>
              <p>
                <small>Hours</small>
              </p>
            </section>
            {/* <span>:</span> */}
            <section>
              <h3>{timerMinute}</h3>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            {/* <span>:</span> */}
            <section>
              <h3>{timerSecond}</h3>
              <p>
                <small>Seconds</small>
              </p>
            </section>
        </section>
      </section>
      <Minionanimation />
    </>
  );
};
