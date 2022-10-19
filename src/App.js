import './App.css';
import React, { useCallback } from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from './Components/Pages/Register';
import Contact from './Components/Pages/Contact';
import Events from './Components/Pages/Events';
import Home from './Components/Pages/Home';
import EventsAbout from './Components/Pages/EventsAbout';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./config/particlesjs-config.json";


function App() {


  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  return (<>
    <div className="App   flex flex-col w-full min-h-screen bg-background2 " >


      <div className='h-full w-full zindex '>
        <BrowserRouter>
          {/* navbar */}
          <Navbar />

          {/* body */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route exact path="events" element={<Events />} />
            <Route path="/events/about/:id" element={<EventsAbout />} />

          </Routes>
        </BrowserRouter>

      </div>




      {/* <ParticlesBackground /> */}

      {/* <Footer/> */}
    </div>
    <Particles options={particlesOptions} init={particlesInit} />

  </>

  );
}

export default App;
