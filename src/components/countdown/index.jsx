import React, { useState, useEffect } from 'react';

function CountdownTimer({ hours, minutes, seconds }) {
  const [time, setTime] = useState({ hours: hours || 18, minutes: minutes || 17, seconds: seconds || 23 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);
        // You can trigger some action here when the countdown reaches 0.
      } else {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
          } else {
            setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
          }
        } else {
          setTime({ hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1 });
        }
      }
    }, 1000); // Update every second (1000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div>
        Select Next Day Shipping within <strong>{time.hours.toString().padStart(2, '0')} hours, {time.minutes.toString().padStart(2, '0')} minutes and {time.seconds.toString().padStart(2, '0')} seconds</strong> and receive it <strong>Friday, Sep 9</strong>
    </div>
  );
}

export default CountdownTimer;
