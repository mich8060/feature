import React, { useState, useEffect } from 'react';

import './timer.scss';

export default function Timer({ targetDate, title }){
    const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if(difference > 0){
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
});

const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

return (
<div className="timer">
    <div className="timer--title">{title}</div>
    <div className="timer--clock">
        <div className="timer--number">
            <div>{addLeadingZero(timeLeft.days)}</div>
            <div className="timer--label">Days</div>
        </div>
        <div className="timer--number">
            <div>:</div>
        </div>
        <div className="timer--number">
            <div>{addLeadingZero(timeLeft.hours)}</div>
            <div className="timer--label">Hours</div>
        </div>
        <div className="timer--number">
            <div>:</div>
        </div>
        <div className="timer--number">
            <div>{addLeadingZero(timeLeft.minutes)}</div>
            <div className="timer--label">Minutes</div>
        </div>
        <div className="timer--number">
            <div>:</div>
        </div>
        <div className="timer--number">
            <div>{addLeadingZero(timeLeft.seconds)}</div>
            <div className="timer--label">Seconds</div>
        </div>
    </div>
</div>
);
};
