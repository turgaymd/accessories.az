import React from "react";


const Card = ({title, description,image}) => {
  return (
    <div className="card">
      <div className="card__top">
        <img
          src={image}
        />
        <div className="card__topInfo mb-2 mt-5">
          <h2>{title}</h2>
        </div>
      </div>
    
  
  
    </div>
  );
};

export default Card;