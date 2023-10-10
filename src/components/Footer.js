import React from "react";
import "./Footer.css";

const Footer = () => {
  const contactInfo = {
    address: "22 Street Name, Suburb, 8000,",
    address2: "Cape Town, South Africa",
    phone: "+27 21 431 0001",
    email: "enquirie@website.co.za",
  };

  const socialLinks = [
    { name: "Youtube", url: "https://www.youtube.com/" },
    { name: "Behance", url: "https://www.behance.net/" },
    { name: "Dribbble", url: "https://dribbble.com/" },
    { name: "Github", url: "https://github.com/" },
    { name: "Linkedin", url: "https://www.linkedin.com/" },
    {
      name: "Teams",
      url: "https://www.microsoft.com/en-us/microsoft-teams/log-in",
    },
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "Twitter", url: "https://twitter.com/" },
  ];

  // Split socialLinks into three equal parts
  const splitSocialLinks = socialLinks.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="heading-tag">
          <div className="heading-tag-child"></div>
          <div className="contact-us">Contact us</div>
        </div>
        <div className="footer-middle">
          <div className="have-a-project-container">
            <p>Have a project in mind?</p>
            <p>Let's make it happen</p>
          </div>
          <div className="street-name-suburb-container">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.address2}</p>
            <p>{contactInfo.phone}</p>
            <a className="enquire" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div className="footer-social">
          <div className="terms-of-service-container">
            <a href="/terms-of-service">Terms of service</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/impressum">Impressum</a>
          </div>

          {/*social links in three columns */}
          {splitSocialLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="social-column">
              {column.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url}>
                  {link.name}
                </a>
              ))}
            </div>
          ))}

          <div className="explore-open-jobs-container">
            <a href="/open-jobs">Explore open jobs</a>
            <p>&nbsp;</p>
            <p>&copy; 2000—2023 Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
