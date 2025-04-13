import React from 'react';
import { Link } from 'react-router-dom';
import ParticleInteractive from './components/ParticleInteractive';


export function PageNotFound() {

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
      <ParticleInteractive />

      <h1 style={{ color: 'white' }}>
        Page Not Found :(
      </h1>

      <Link to="/home" style={{ display: 'block', color: 'rgb(0,150,250,1)' }}>Go back to home?</Link>

    </div>

  );

}

