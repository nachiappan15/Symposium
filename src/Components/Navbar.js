import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useParams } from "react-router-dom"

// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const LargeNavbar = ({ url }) => {
  return (
    <div className="w-full ">

      <nav className="navstick h-14 lg:h-20  flex items-center font-bold justify-between w-full ">
        <span className="lg:text-2xl md:text-xl  ml-4 text-dark_text ">
          <span className="small_grad_text">Velammal Enginnering College</span>
        </span>
        <div
          className="lg:mr-16 md:mr-2
          items-center gap-8 text-dark_text text-lg font-bold hidden lg:flex text-headline  "
        >
          <Link to="/"><span className={`${url === "/" ? `bg-selected` : `hover:bg-highlight`} px-4 py-2 rounded-md cursor-pointer `}>Home</span></Link>
          <Link to="/events"><span className={`${url === "/events" ? `bg-selected` : `hover:bg-highlight`} px-4 py-2 rounded-md cursor-pointer `}>Events</span></Link>
          <Link to="/register"><span className={`${url === "/register" ? `bg-selected` : `hover:bg-highlight`} px-4 py-2 rounded-md cursor-pointer `}>Register</span></Link>
          <Link to="/contact"><span className={`${url === "/contact" ? `bg-selected` : `hover:bg-highlight`} px-4 py-2 rounded-md cursor-pointer   `}>
            Contact Us
          </span></Link>
        </div>
      </nav>


    </div>

  );
};
const SmallNavbar = () => {

  const click = () => {
    setNavClick(Prev => {
      return !Prev
    })
  }

  const [navClick, setNavClick] = useState(false)
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
          <div onClick={click} className="text-headline">
            <HiMenu size={35} />
          </div>

        </div>
      </nav>
      <div className={`text-headline h-12 w-full gap-1 items-center justify-center  ${navClick ? `flex` : `hidden`}`}>
        <Link to="/"><span className=" bg-selected p-1 rounded-md cursor-pointer hover:bg-highlight">Home</span></Link>
        <Link to="/events"><span className="  p-1 rounded-md cursor-pointer hover:bg-highlight">Events</span></Link>
        <Link to="/register"> <span className="  p-1 rounded-md cursor-pointer hover:bg-highlight">Register</span></Link>
        <Link to="/contact"><span className="  p-1 rounded-md cursor-pointer hover:bg-highlight">
          Contact Us
        </span></Link>
      </div>
    </>
  );
};

const Navbar = () => {
  let location = useLocation();

  return (
    <>
      <div className="hidden lg:flex  ">
        <LargeNavbar url={location.pathname} />
      </div>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
    </>
  );
};

export default Navbar;