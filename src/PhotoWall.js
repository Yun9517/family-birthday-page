import React, { useState } from 'react';


import './PhotoWall.css'; // Import custom styles for the photo wall
import photos from './photos'; // Import your photo data

const PhotoWall = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="photo-wall-container">
      <h3>回憶照片牆</h3>
      <div className="photo-grid"> {/* Add a new class for styling */}
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img
              src={photo.src}
              alt={photo.alt}
              title={photo.alt} // Tooltip on hover
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            {selectedImage.alt && <p className="modal-caption">{selectedImage.alt}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoWall;