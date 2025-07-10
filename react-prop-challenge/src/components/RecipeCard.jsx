import React from 'react';

const RecipeCard = ({ recipe }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    lineHeight: '1.5',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>{recipe.name}</h2>
      <h4>Ingredients:</h4>
      <ul style={listStyle}>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p style={paragraphStyle}>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;
