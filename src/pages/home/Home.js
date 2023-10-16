import React, { memo } from "react";
import "./home.css";
import Cards from "../../components/card";
import CardBlog from "../../components/cardBlog";
import Testimonials from "../../components/testimonials";
import { images }from "../../components/images";

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="banner-content">
          <div className="banner-title">
            <span>Future of Learning is</span>
            <span className="orange-title">UnconstrainED</span>
          </div>
          <div className="banner-desc">
            Partnering with teachers to harness the power of
            emerging technology to enable human-centred
            approach to learning
          </div>
          <img className="demo-btn" src={images['demo-video-btn.svg']} loading="lazy" alt="demo button" />
        </div>
        <div className="banner-image-container">
          <img className="banner-image" src={images['banner-image.svg']} loading="lazy" alt="banner" />
        </div>
      </div>
      <div className="body-rest">
        <Cards />
        <CardBlog />
        <Testimonials />
      </div>
    </div>
  );
};

export default memo(Home);