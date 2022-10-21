import React, { useState } from "react";
// import hack from "../images/Hackathon.jpg"
import { Link } from "react-router-dom";


const EventCard = ({ Name, quote, route }) => {
  // state management
  const [click, setClick] = useState(false)

  const clicking = () => {
    setClick(prev => !prev)
  }

  return (
    <div className=" min-h-[8rem] bg-card hover:scale-110 text-center text-paragraph rounded-xl gap-4 py-4 px-3   flex flex-col items-center justify-center cursor-pointer" onClick={clicking}>

      <h1 className="font-semibold grad_text ">{Name}</h1>
      <span className={`text-paragraph text-sm flex-col items-center gap-2 text-center  ${click ? `flex` : `hidden`}`} >
        <p className={`text-paragraph text-sm `}>{quote}</p>

        <Link to={`/events/about/${route}`}><h1 className="text-sm  bg-selected border-2 border-selected hover:bg-transparent hover:text-selected font-semibold text-headline p-1 hover rounded-md">More info</h1></Link>
      </span>

    </div>
  );
};

export default EventCard;
