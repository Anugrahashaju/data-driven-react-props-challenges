import React from 'react';

const ProgressBar = ({ percentage }) => {
  const containerStyle = {
    height: '25px',
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '10px',
  };

  const fillerStyle = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: percentage < 50 ? '#f39c12' : '#4caf50',
    transition: 'width 0.5s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
