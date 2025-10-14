import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles
import photos from './photos'; // Import your photo data

const PhotoWall = () => {
  return (
    <div className="photo-wall-container">
      <h3>回憶照片牆</h3>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.src} alt={photo.alt} />
            <p className="legend">{photo.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoWall;