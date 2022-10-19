// import React from 'react'
// import ParticlesConfig from '../config/particlesjs-config'
// import Particles from 'react-tsparticles'

// const ParticlesBackground = () => {
//     return (<>
//         <Particles params={ParticlesConfig}>

//         </Particles></>

//     )
// }

// export default ParticlesBackground

import React from 'react'
import Particles from 'react-tsparticles'

function ParticleBackground() {
  return (
    <Particles 
      params={
        {
            "background": {
              "color": {
                "value": "#fff"
              },
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            },
            "backgroundMask": {
              "cover": {
                "color": {
                  "value": "#000"
                }
              }
            },
            "fullScreen": {
              "zIndex": -10
            },
            "interactivity": {
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "push"
                },
                "onHover": {
                  "enable": true,
                  "mode": "grab",
                  "parallax": {
                    "enable": true,
                    "force": 60
                  }
                }
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
                },
                "grab": {
                  "distance": 400
                }
              }
            },
            "particles": {
              "color": {
                "value": "#68cefb"
              },
              "links": {
                "color": {
                  "value": "#68cefc"
                },
                "distance": 150,
                "enable": true,
                "opacity": 0.4
              },
              "move": {
                "attract": {
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "enable": true,
                "path": {},
                "outModes": {
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "spin": {}
              },
              "number": {
                "density": {
                  "enable": true
                }
              },
              "opacity": {
                "random": {
                  "enable": true
                },
                "value": {
                  "min": 0.1,
                  "max": 0.5
                },
                "animation": {
                  "enable": true,
                  "speed": 3,
                  "minimumValue": 0.1
                }
              },
              "size": {
                "random": {
                  "enable": true
                },
                "value": {
                  "min": 0.1,
                  "max": 10
                },
                "animation": {
                  "enable": true,
                  "speed": 20,
                  "minimumValue": 0.1
                }
              }
            }
          }
      }
    />
  )
}

export default ParticleBackground
