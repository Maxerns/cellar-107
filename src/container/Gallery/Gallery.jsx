import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const ButtonClickInsta = () => {
  window.location.href = 'https://www.instagram.com/cellar107_mediterranean/';
};

const galleryLinks = [
  'https://www.instagram.com/p/CwF9TgkI4bf/',
  'https://www.instagram.com/p/C0mD0Eyo-zz/',
  'https://www.instagram.com/p/C0W93WtIa0B/',
  'https://www.instagram.com/p/CzeY9-ToyO2/',
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <p className="p__diphy" style={{ color: '#30241D', fontWeight: 800, fontSize: '20px' }}>Instagram</p>
        <img src={images.pizzacutter} alt="gallery_pizzacutter" className="pizzacutter__img" />
        <h1 className="headtext__messi">Photo Gallery</h1>
        <p className="p__diphy" style={{ color: '#FFFFFF', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque
          egestas mu.
        </p>
        <button type="button" className="custom__button" onClick={ButtonClickInsta}>
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <a
              href={galleryLinks[index]} // Use the corresponding link for each image
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt={`gallery_image-${index + 1}`} />
              <BsInstagram className="gallery__image-icon" />
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;