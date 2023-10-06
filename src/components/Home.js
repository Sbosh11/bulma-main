import "./Home.css";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import CaseStudies from "./CaseStudies";
import Brands from "./Brands";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Hero />
      <WhatWeDo />
      <CaseStudies />
      <Brands />
      <Footer />
    </div>
  );
}
export default Home;
