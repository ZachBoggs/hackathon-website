import React, { useState, useEffect, useMemo } from 'react';
import acmwLogo from './images/clubs/acmw_logo.png'
import acmLogo from './images/clubs/acmlogo.png';
import upeLogo from './images/clubs/UPELogo.png';
import tpcLogo from './images/clubs/TPClogo.png';
import cfeLogo from './images/sponsors/CFE_logo.png';
import chicoStartLogo from './images/sponsors/chicoSTART_logo.png';
import chicoStateEECELogo from './images/sponsors/chicostatecollegeofEECE.png';
import asFundingLogo from './images/sponsors/AS_Funding_Logo.png'

import './Sample.css';

//import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

export function Sample() {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: "#1C1C1C",
        },
      },

      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {

          repulse: {
            distance: 200,
            duration: 10,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#CCCCCC",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: .5,
          straight: false,
        },
        number: {
          density: {
            enable: false,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {

    return (

      <div className="App">
        <title>CSU Chico Hackathon</title>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div style={{ height: "20vh" }}></div> {/* Spacer */}
        <div className="title-bar">
          CSU Chico HACKATHON
        </div>



        <div className='item-holder background-blur'>
          <h1>Hosting Clubs:</h1>
          <img src={upeLogo} alt='upe logo' className="club-logo" />
          <img src={acmLogo} alt='acm logo' className="club-logo" />
          <img src={acmwLogo} alt='acmw logo' className="club-logo" />
          <img src={tpcLogo} alt='tpc logo' className="club-logo" />
        </div>
        <br />
        <br />
        <div className='item-holder background-blur'>
          <h1>Thanks to our sponsors:</h1>
          <p>
            <header style={{ fontSize: '3em' }}>Miles Benton</header>
            <img src={cfeLogo} alt='cfe logo' className="club-logo" />
            <img src={chicoStartLogo} alt='chico start logo' className="club-logo" />
            <img src={chicoStateEECELogo} alt='EECE logo' className="club-logo" />
            <img src={asFundingLogo} alt='as funding logo' className="club-logo" />

          </p>
        </div>

        <br />
        <br />

        <div className='item-holder background-blur' style={{ width: '70%' }}>
          <header className="App-header">
            <div>
              <p><strong>April 25-26 2025</strong>, from <strong> 2:00 PM Friday</strong> to <strong> 2:30 PM Saturday</strong> </p>
            </div>

            <div>
              <p>
                This event is open to all students, whether you’re a first-time participant or a seasoned hackathon veteran!
              </p>
            </div>
            <div>
              <p>
                There will be TWO Divisions with the first place prizing being <strong>$375 for Division 1</strong> and <strong>$200 for Division 2</strong>.
              </p>
            </div>

            <div>
              <p>
                To register or learn more please go to the CatsConnect page:
              </p>
            </div>

            <a
              className="App-link"
              href="https://csuchico.campuslabs.com/engage/event/11056456"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register on CatsConnect!
            </a>

          </header>
        </div>
        <div style={{ height: "10vh" }}></div>
      </div >
    );
  }
}

//export default Sample;
