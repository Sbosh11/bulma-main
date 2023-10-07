import React, { useState, useEffect } from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  const [imageCardData, setImageCardData] = useState([]);

  // Function to fetch image data from the API
  const fetchImageCardData = async () => {
    try {
      const response = await fetch(
        "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/"
      );

      if (response.ok) {
        const data = await response.json();
        setImageCardData(data);
      } else {
        console.error("Failed to fetch image data");
      }
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  useEffect(() => {
    fetchImageCardData();
  }, []);

  return (
    <>
      <div className="first-container case-studies" id="case-studies">
        <div className="heading-tag">
          <div className="heading-tag-child"></div>
          <div className="case-studies1">Case Studies</div>
        </div>
        <div className="image-card-container">
          {imageCardData.map((data, index) => (
            <div
              key={index}
              className="image-card"
              style={{
                backgroundImage: `url(${data.imageUrl})`,
              }}
            >
              <div className="overlay-content">
                <div className="heading-tag-child"></div>
                <h2 className="overlay-heading">{data.title}</h2>
                <p className="overlay-text">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
