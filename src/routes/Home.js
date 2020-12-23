import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Home.scss";
import { ReactComponent as LandingImage } from "img/distribute-landing.svg";
import { ReactComponent as LandingBg } from "img/distribute-landing-bg.svg";

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 landing-intro">
              <h1>Distribute things to citizens and households easily</h1>
            </div>
            <div className="col-lg-8 col-md-12 landing-hero">
              <div className="hero-image">
                <LandingBg />
                <LandingImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
