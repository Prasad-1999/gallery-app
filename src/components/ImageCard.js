import React from "react";
import "../styles/ImageCard.css";

const ImageCard = ({ image, onClick, onFavorite, isFavorite }) => {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
      <button onClick={onFavorite} className="favorite-btn">
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default ImageCard;
