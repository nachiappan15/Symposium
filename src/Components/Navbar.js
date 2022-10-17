import React, { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { HiMenu } from "react-icons/hi";

const LargeNavbar = () => {
  return (
    <nav className=" h-14 lg:h-20  flex items-center font-bold justify-between w-full ">
      <span className="lg:text-2xl md:text-xl  ml-4 text-dark_text ">
        <span className="small_grad_text">Velammal Enginnering College</span>
      </span>
      <div
        className="lg:mr-16 md:mr-2
          items-center gap-8 text-dark_text text-lg font-bold hidden lg:flex  "
      >
        <span className="bg-gray-900  px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500">Home</span>
        <span className="  px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500">Events</span>
        <span className="  px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500">TimeLine</span>
        <span className="  px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500">
          Contact Us
        </span>
      </div>
    </nav>
  );
};
const SmallNavbar = () => {

  const click = () => {
    setNavClick (Prev=>{
      return !Prev
    })
  }

  const[navClick , setNavClick] = useState(true)
  return (
    <>
      <nav className=" h-14   flex items-center font-bold justify-between  relative">
        <span className="text-3xl   ml-4 text-dark_text ">
          <span className="small_grad_text ">VEC</span>
        </span>
        <div
          className="mr-4 flex
          items-center  text-dark_text text-lg font-bold"
        >
          <div onClick={click}>
          <HiMenu size={35}  />
          </div>
          
        </div>
      </nav>
      <div className={`h-12 w-full items-center justify-center absolute  ${navClick ? `flex`:`hidden`}`}> 
        <span className=" bg-gray-900 px-4 py-2 rounded-md cursor-pointer">Home</span>
        <span className="  px-4 py-2 rounded-md cursor-pointer">Events</span>
        <span className="  px-4 py-2 rounded-md cursor-pointer">TimeLine</span>
        <span className="  px-4 py-2 rounded-md cursor-pointer">
          Contact Us
        </span>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex  ">
        <LargeNavbar />
      </div>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
    </>
  );
};

export default Navbar;
