import React from "react";

const Card = ({ imdb, img, title, type, year }) => {
    
  return (
    <a href={`https://www.imdb.com/title/${imdb}/`}
    target="_blank">
      <div className="bg-black h-[500px] rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold uppercase text-white">
            {title} ({year})
          </h2>
          <p className="text-sm uppercase text-gray-400 mt-1">{type}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
