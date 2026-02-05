
import React from 'react';
import { ScaleLoader } from 'react-spinners';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',              
        justifyContent: 'center',        
        height: '40vh',               
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        position: 'fixed',            
        top:'50%',
        left: 0,
        zIndex: 9999                   
      }}
    >
      <ScaleLoader color="#36d7b7" height={60} width={6} radius={2} margin={4} />
    </div>
  );
}

export default Loader;