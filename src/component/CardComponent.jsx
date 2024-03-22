import React from 'react';
 const CardComponent = ({ imageUrl, title, description }) => {
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full h-40 object-cover object-center" src={imageUrl} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      );
    };
    
    export default CardComponent;
