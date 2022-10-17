import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import BIRDS from "vanta/dist/vanta.net.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          color: 0x3ff3ff,
          backgroundColor: "#2b2d42",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className="  w-full text-white">
      {/* navbar */}
      <Navbar />

      {/* body */}
      <Body />
    </div>
  );
};

export default MyComponent;
