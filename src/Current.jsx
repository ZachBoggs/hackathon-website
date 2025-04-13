import React from 'react';
import { AllImages } from './images'
import ParticleNonInteractive from './components/ParticleNonInteractive';

import './Current.css';


export function Current() {

  return (

    <div className="App">
      <title>CSU Chico Hackathon</title>
      <ParticleNonInteractive />
      <div style={{ height: "20vh" }}></div> {/* Spacer */}
      <div className="title-bar">
        CSU Chico HACKATHON
      </div>

      <div className='item-holder background-blur'>
        <h1>Hosting Clubs:</h1>
        <img src={AllImages.upe} alt='upe logo' className="club-logo" />
        <img src={AllImages.acmw} alt='acmw logo' className="club-logo" />
        <img src={AllImages.acm} alt='acm logo' className="club-logo" />
        <img src={AllImages.tpc} alt='tpc logo' className="club-logo" />
      </div>
      <br />
      <br />
      <div className='item-holder background-blur'>
        <h1>Thanks to our sponsors:</h1>
        <p>
          <header style={{ fontSize: '3em' }}>Miles Benton</header>
          <img src={AllImages.cfe} alt='cfe logo' className="club-logo" />
          <img src={AllImages.chicoStart} alt='chico start logo' className="club-logo" />
          <img src={AllImages.EECE} alt='EECE logo' className="club-logo" />
          <img src={AllImages.asFunding} alt='as funding logo' className="club-logo" />

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
