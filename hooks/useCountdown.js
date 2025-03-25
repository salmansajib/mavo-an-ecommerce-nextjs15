import { useState, useEffect } from "react";

const useCountdown = (initialDays) => {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const totalSeconds =
        timeLeft.days * 24 * 60 * 60 +
        timeLeft.hours * 60 * 60 +
        timeLeft.minutes * 60 +
        timeLeft.seconds;

      if (totalSeconds <= 0) {
        // Reset to initial days when countdown reaches 0
        return {
          days: initialDays,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const newTotalSeconds = totalSeconds - 1;
      const days = Math.floor(newTotalSeconds / (24 * 60 * 60));
      const hours = Math.floor((newTotalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((newTotalSeconds % (60 * 60)) / 60);
      const seconds = newTotalSeconds % 60;

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, initialDays]);

  return timeLeft;
};

export default useCountdown;
