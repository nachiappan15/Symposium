import React, { useState } from "react";
// import hack from "../images/Hackathon.jpg"

const EventCard = ({Name , img}) => {
const clicking = ()=> {
  setClick(prev => !prev)
}

  const[click , setClick]  = useState(false)

  return (
    <div className=" min-h-[8rem] bg-card hover:scale-110 text-paragraph rounded-xl gap-4 py-4 px-3   flex flex-col items-center justify-center cursor-pointer" onClick={clicking}>
      {/* <img src={`../images/`+img} className="w-full rounded-lg" /> */}
      <h1 className="font-semibold  ">{Name}</h1>
      <span className={`text-paragraph text-sm flex-col items-center gap-2  ${click?`flex`:`hidden`}`} >
      <p className={`text-paragraph text-sm `}>lorem askh;c docpo sijdos  ;xcm wod wdfj ukwgk uy3d vhwjh  owdo odp
      </p>

      <h1 className="text-sm  bg-selected border-2 border-selected hover:bg-transparent hover:text-selected font-semibold text-headline p-1 hover rounded-md">More info</h1>
      </span>
      
    </div>
  );
};

export default EventCard;
