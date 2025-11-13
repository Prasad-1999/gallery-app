import React, { useEffect, useState } from "react";
import { fetchImages } from "../api";
import ImageCard from "../components/ImageCard";
import ImageModal from "../components/ImageModal";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "../styles/Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    loadImages();
  }, [query]);

 const loadImages = async () => {
  const data = await fetchImages(query, page);
  setImages(Array.isArray(data) ? data : []); 
};


  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleFavorite = (img) => {
    let updated = [...favorites];
    if (favorites.find((f) => f.id === img.id)) {
      updated = favorites.filter((f) => f.id !== img.id);
    } else {
      updated.push(img);
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="gallery-container">
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter setQuery={setQuery} />

      <div className="image-grid">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            onClick={() => setSelectedImage(img)}
            onFavorite={() => handleFavorite(img)}
            isFavorite={favorites.some((f) => f.id === img.id)}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
