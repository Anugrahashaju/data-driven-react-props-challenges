import React from 'react';

const ContentSection = ({ title, children }) => {
  const sectionStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#333',
  };

  return (
    <div style={sectionStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default ContentSection;
