import React from 'react';
import { AllImages } from './images'
import { easeIn, motion } from "framer-motion";
import ParticleNonInteractive from './components/ParticleNonInteractive';
import TooltipWrapper from './components/TooltipWrapper';
import SpringyImage from './components/SpringyImage';


import './Current.css';
import Footer from './components/Footer';

function slideDirection(xDistance, yDistance, time) {
  return {
    x: [xDistance, 0],
    y: [yDistance, 0],
    opacity: [0, 1],
    transition: {
      duration: time,
      ease: 'easeInOut',
    },
  };
}

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
        <div>

          <TooltipWrapper title="Upsilon Pi Epsilon">
            <SpringyImage src={AllImages.upe} alt="upe logo" link="." className='club-logo hover-pointing' />
          </TooltipWrapper>
          <TooltipWrapper title="The Association for Computer Machinery for Women">
            <SpringyImage src={AllImages.acmw} alt="acmw logo" link='.' className='club-logo hover-pointing' />
          </TooltipWrapper>
          <TooltipWrapper title="The Association for Computer Machinery">
            <SpringyImage src={AllImages.acm} alt="acm logo" link='.' className='club-logo hover-pointing' />
          </TooltipWrapper>
          <TooltipWrapper title="Technical Projects Club">
            <SpringyImage src={AllImages.tpc} alt="tpc logo" link='.' className='club-logo hover-pointing' />
          </TooltipWrapper>
        </div>
      </div>
      <br />
      <br />
      <div className='item-holder background-blur'>
        <h1>Thanks to our sponsors:</h1>
        <div>
          <motion.h1
            style={{ fontSize: '3em' }}
            whileInView={slideDirection(100, 0, 1)}

          >
            Miles Benton
          </motion.h1>
          <motion.img src={AllImages.cfe} alt='cfe logo' className="club-logo" whileInView={slideDirection(0, 40, .5)} />
          <motion.img src={AllImages.chicoStart} alt='chico start logo' className="club-logo" whileInView={slideDirection(0, 70, .5)} />
          <motion.img src={AllImages.EECE} alt='EECE logo' className="club-logo" whileInView={slideDirection(0, 100, .5)} />
          <motion.img src={AllImages.asFunding} alt='as funding logo' className="club-logo" whileInView={slideDirection(0, 100, .8)} />

        </div>
      </div>

      <br />
      <br />

      <div className='item-holder background-blur' style={{ width: '70%' }}>
        <header className="App-header">
          <div>
            <motion.p
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              whileInView={{
                scale: [1, 1.05],
              }}
            >
              <strong>April 25-26 2025</strong>, from <strong> 2:00 PM Friday</strong> to <strong> 2:30 PM Saturday</strong>
            </motion.p>
          </div>


          <div>
            <p>
              Open to all enrolled students, whether you’re a first-time participant or a seasoned hackathon veteran!
            </p>
          </div>
          <div style={{ width: '100%' }}>
            <p style={{ fontSize: '2em', filter: 'brightness(1.3) drop-shadow(0px 0px 1px rgba(255, 255, 255, 1)) drop-shadow(0px -10px 5px rgba(0, 0, 0, .4))' }}>
              <strong>Prizes:</strong>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ justifyContent: 'center', display: 'flex', padding: '.5em', gap: '1em', width: '100%' }}>
                <div className='item-holder'  >
                  <h4><strong>Division 1</strong>:</h4>
                  <ol>
                    <motion.li whileInView={slideDirection(-100, 0, 1)}>$375</motion.li>
                    <motion.li whileInView={slideDirection(-100, 0, 1.2)}>$250</motion.li>
                  </ol>
                </div>
                <div className='item-holder'>
                  <h4><strong>Division 2</strong>:</h4>
                  <ol>
                    <motion.li whileInView={slideDirection(100, 0, 1)}>$200</motion.li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>
              To register or learn more please go to the CatsConnect page:
            </p>
          </div>

          <motion.a
            className="App-link"
            href="https://csuchico.campuslabs.com/engage/event/11056456"
            target="_blank"
            rel="noopener noreferrer"
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            whileInView={{
              scale: [1, 1.2],
            }}
          >
            Register on CatsConnect!
          </motion.a>

        </header>
      </div >
      <div style={{ height: "10vh" }}></div>
      <Footer />
    </div >
  );

}
