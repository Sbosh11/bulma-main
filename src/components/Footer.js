import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="heading-tag">
        <div className="heading-tag-child"></div>
        <div className="contact-us">Contact us</div>
      </div>
      <div className="footer-bg"></div>

      <div className="explore-open-jobs-container">
        <p className="explore-open-jobs">Explore open jobs</p>
        <p className="explore-open-jobs">&nbsp;</p>
        <p className="explore-open-jobs">©2000—2023 Company Name</p>
      </div>
      <div className="youtube-behance-dribbble-container">
        <p className="explore-open-jobs">Youtube</p>
        <p className="explore-open-jobs">Behance</p>
        <p className="explore-open-jobs">Dribbble</p>
      </div>
      <div className="github-linkedin-teams-container">
        <p className="explore-open-jobs">Github</p>
        <p className="explore-open-jobs">Linkedin</p>
        <p className="explore-open-jobs">Teams</p>
      </div>
      <div className="facebook-instagram-twitter-container">
        <p className="explore-open-jobs">Facebook</p>
        <p className="explore-open-jobs">Instagram</p>
        <p className="explore-open-jobs">Twitter</p>
      </div>
      <div className="terms-of-service-container">
        <p className="explore-open-jobs">Terms of service</p>
        <p className="explore-open-jobs">Privacy policy</p>
        <p className="explore-open-jobs">Impressum</p>
      </div>
      <div className="street-name-suburb-container">
        <p className="explore-open-jobs">22 Street Name, Suburb, 8000,</p>
        <p className="explore-open-jobs">Cape Town, South Africa</p>
        <p className="explore-open-jobs">+27 21 431 0001</p>
        <p className="enquiriewebsitecoza">enquirie@website.co.za</p>
      </div>
      <div className="have-a-project-container">
        <p className="explore-open-jobs">Have a project in mind?</p>
        <p className="explore-open-jobs">Let's make it happen</p>
      </div>
    </div>
  );
};

export default Footer;
