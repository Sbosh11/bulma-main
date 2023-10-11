import React from "react";
import "./Brands.css";
import brandData from "../content/brandData"; // Import the brand data

const Brands = () => {
  return (
    <>
      <div className="first-container brands" id="brands">
        <div className="heading-tag">
          <div className="heading-tag-child"></div>
          <div className="case-studies1" id="brands1">
            You’ll be in good company
          </div>
        </div>
        <b className="we-offer-a">Trusted by leading brands</b>
      </div>

      <div className="brand-container">
        {brandData.map((brand, index) => (
          <div key={index} className="brand-item">
            <a href={brand.imageUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={brand.imageUrl}
                alt={brand.alt}
                description={brand.description}
                width="120" // Set width for accessibility
                height="80" // Set height for accessibility
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Brands;
