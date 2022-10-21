import './App.css';
import React, { useCallback } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./config/particlesjs-config.json";

// components
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop ';


// Pages
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Home from './Pages/Home';
import EventsAbout from './Pages/EventsAbout';
import Footer from './Components/Footer';
// import ScrollToTop from './Components/ScrollToTop '; 




function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (<>
    <div className="App flex flex-auto w-full min-h-screen bg-background2 " >

      <div className=' flex flex-col  justify-between grow w-full  zindex '>

        <BrowserRouter>
          {/* navbar */}
          <Navbar />

          {/* body */}
          <ScrollToTop >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="contact" element={<Contact />} />
              <Route exact path="events" element={<Events />} />
              <Route path="/events/about/:id" element={<EventsAbout />} />

            </Routes>
          </ScrollToTop >
          <Footer/>
        </BrowserRouter>

      </div>
    </div>
    
    <Particles options={particlesOptions} init={particlesInit} />
  </>

  );
}

export default App;
