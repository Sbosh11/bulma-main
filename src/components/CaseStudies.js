import React, { useState, useEffect, useCallback } from "react";
import "./CaseStudies.css";


const CaseStudies = () => {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState([]);

  // Function to fetch image data from the API
  const fetchImageCardData = async () => {
    try {
      const response = await fetch(
        "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/"
      );

      if (response.ok) {
        const data = await response.json();
        setCarouselItems(data);
      } else {
        console.error("Failed to fetch image data");
      }
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  const handlePrev = useCallback(() => {
    shiftPrev([...carouselItems]);
    setMoveClass("prev");
  }, [carouselItems]);

  const handleNext = useCallback(() => {
    shiftNext([...carouselItems]);
    setMoveClass("next");
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastCard = copy.pop();
    copy.unshift(lastCard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstCard = copy.shift();
    copy.push(firstCard);
    setCarouselItems(copy);
  };

  useEffect(() => {
    fetchImageCardData();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);

    const updateSlidesPerRow = () => {
      const screenWidth = window.innerWidth;
      let slidesPerRow = 3; // Default for desktop

      if (screenWidth <= 900) {
        slidesPerRow = 1; // Mobile
      } else if (screenWidth <= 1200) {
        slidesPerRow = 2; // Tablet
      }

      document.documentElement.style.setProperty("--slides-per-row", slidesPerRow);
    };

    window.addEventListener("resize", updateSlidesPerRow);
    updateSlidesPerRow();

    // Auto-advance the carousel every 5 seconds (5000 milliseconds)
    const autoAdvanceInterval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(autoAdvanceInterval);
      window.removeEventListener("resize", updateSlidesPerRow);
    };
  }, [carouselItems, handleNext]);

  return (

    <div className="first-container case-studies" id="case-studies">
    <div className="heading-tag">
      <div className="heading-tag-child"></div>
      <div className="case-studies1">Case Studies</div>
    </div>
    <div className="carouselwrapper module-wrapper">
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {carouselItems.map((t, index) => (
          <div
            key={index}
            className="image-card"
            style={{
              backgroundImage: `url(${t.imageUrl})`,
            }}
          >
            <div className="overlay-content">
              <div className="heading-tag-child"></div>
              <h2 className="overlay-heading">{t.title}</h2>
              <p className="overlay-text">{t.description}</p>
            </div>
          </div>
        ))}
      </ul>
      <div className="dots">
        <div onClick={handlePrev} className="prev">
          <span className="material-icons"></span>
        </div>
        <div onClick={handleNext} className="next">
          <span className="material-icons"></span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CaseStudies;
