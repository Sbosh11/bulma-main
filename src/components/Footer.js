import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="heading-tag">
          <div className="heading-tag-child"></div>
          <div className="contact-us">Contact us</div>
        </div>
        <div className="footer-middle">
          <div className="have-a-project-container">
            <p className="">Have a project in mind?</p>
            <p className="">Let's make it happen</p>
          </div>
          <div className="street-name-suburb-container">
            <p className="">22 Street Name, Suburb, 8000,</p>
            <p className="">Cape Town, South Africa</p>
            <p className="">+27 21 431 0001</p>
            <a className="enquire" href="mailto:enquirie@website.co.za">
              enquirie@website.co.za
            </a>
          </div>
        </div>
        <div className="footer-social">
          <div className="terms-of-service-container">
            <a href="/terms-of-service">Terms of service</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/impressum">Impressum</a>
          </div>

          <div className="youtube-behance-dribbble-container">
            <a href="https://www.youtube.com/">Youtube</a>
            <a href="https://www.behance.net/">Behance</a>
            <a href="https://dribbble.com/">Dribbble</a>
          </div>
          <div className="github-linkedin-teams-container">
            <a href="https://github.com/">Github</a>
            <a href="https://www.linkedin.com/">Linkedin</a>
            <a href="https://www.microsoft.com/en-us/microsoft-teams/log-in">
              Teams
            </a>
          </div>
          <div className="facebook-instagram-twitter-container">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://twitter.com/">Twitter</a>
          </div>
          <div className="explore-open-jobs-container">
            <a href="/open-jobs">Explore open jobs</a>
            <p className="">&nbsp;</p>
            <p className=""> &copy; 2000—2023 Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
