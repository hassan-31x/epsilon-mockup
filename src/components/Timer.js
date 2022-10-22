import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "January, 23, 2023";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();    
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="w-full flex justify-between" role="timer">
      <div className="">
        <div className="text-center">
          <p className='h-10 bg-white text-[#AC67D6] rounded-md font-bold text-lg px-5 pt-1' id="day">{days < 10 ? "0" + days : days}</p>
          <span className="text-md">Days</span>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <p className='h-10 bg-white text-[#AC67D6] rounded-md font-bold text-lg px-5 pt-1' id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text-md">Hours</span>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <p className='h-10 bg-white text-[#AC67D6] rounded-md font-bold text-lg px-5 pt-1' id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text-md">Minutes</span>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <p className='h-10 bg-white text-[#AC67D6] rounded-md font-bold text-lg px-5 pt-1' id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text-md">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;