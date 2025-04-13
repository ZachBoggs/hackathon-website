import React from 'react';
import ParticleInteractive from './components/ParticleInteractive';
import HomeButtonAnimated from './components/HomeButtonAnimated';
import { useLocation } from 'react-router-dom';

export function PageNotFound() {
  const location = useLocation();

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
      <ParticleInteractive />

      <h1 style={{ color: 'white', fontWeight: 'bold' }}>Error 404</h1>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        '<code>{location.pathname}</code>' Not Found :(
      </h2>
      <HomeButtonAnimated />

    </div>

  );

}