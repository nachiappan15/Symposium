import React from 'react'
import { useEffect, useState } from "react";



const Timer = () => {

  const calculateTimeLeft = () => {
    const difference = +new Date("2022-11-05T01:00:00+05:30") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return timeLeft;

  };

  // state management
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useeffect
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="h-24 w-full  lg:h-32  lg:w-2/4 flex items-center justify-center gap-3 lg:gap-4 mt-5  ">

      <div className='h-full w-1/5 lg:w-2/5 flex items-center justify-center text-paragraph  lg:text-3xl flex-col '> <span className='   module lg:px-4 lg:py-2 rounded-md text-paragraph text-xl lg:text-6xl '>{timeLeft.days}</span>DAYS</div>
      <div className='h-full w-1/5 lg:w-2/5 flex items-center justify-center text-paragraph  lg:text-3xl flex-col '> <span className='module lg:px-4 lg:py-2 rounded-md text-paragraph text-xl lg:text-6xl '>{timeLeft.hours}</span>HOURS</div>
      <div className='h-full w-1/5 lg:w-2/5 flex items-center justify-center text-paragraph  lg:text-3xl flex-col '> <span className='module lg:px-4 lg:py-2 rounded-md text-paragraph text-xl lg:text-6xl '>{timeLeft.minutes}</span>MINUTES</div>
      <div className='h-full w-1/5 lg:w-2/5 flex items-center justify-center text-paragraph  lg:text-3xl flex-col '> <span className='module lg:px-4 lg:py-2 rounded-md text-paragraph text-xl lg:text-6xl '>{timeLeft.seconds}</span>SECONDS</div>

    </div>
  )
}

export default Timer