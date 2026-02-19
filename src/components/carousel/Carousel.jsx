import { useState } from "react";
import "./Carousel.css";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-img"
      />

      {pictures.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Précédent"
            className="carousel-arrow left"
            onClick={prevSlide}
          />
          <img
            src={rightArrow}
            alt="Suivant"
            className="carousel-arrow right"
            onClick={nextSlide}
          />

          <span className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
