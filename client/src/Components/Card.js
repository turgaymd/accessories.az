import React from "react";


const Card = ({title, description,image}) => {
  return (
    <div className="card">
         <h2 className="text-white pt-3 pb-3">{title}</h2>

        <img
          src={image} loading="lazy" 
        />
    </div>
  );
};

export default Card;