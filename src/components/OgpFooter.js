import React, { Component } from "react";
import "./OgpFooter.scss";
import ogpLogo from "img/ogp-logo.svg";
import ogpLogoMark from "img/ogp-logo-mark-white.svg";
import iconFacebook from "img/icons/bxl-facebook.svg";
import iconLinkedIn from "img/icons/bxl-linkedin.svg";

class OgpFooter extends Component {
  render() {
    const urlOgpWebsite = "https://open.gov.sg";
    const urlOgpFacebook = "https://www.facebook.com/opengovsg";
    const urlOgpLinkedIn =
      "https://www.linkedin.com/company/open-government-products";

    return (
      <React.Fragment>
        <footer className="ogp-footer-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 footer-left">
                <p>Built by</p>
                <a href={urlOgpWebsite}>
                  <img src={ogpLogo} />
                </a>
              </div>
              <div className="col-sm-12 col-md-6 footer-right">
                <div className="social-icons">
                  <div className="icon">
                    <a href={urlOgpWebsite}>
                      <img src={ogpLogoMark} />
                    </a>
                  </div>
                  <div className="icon">
                    <a href={urlOgpFacebook}>
                      <img src={iconFacebook} />
                    </a>
                  </div>
                  <div className="icon">
                    <a href={urlOgpLinkedIn}>
                      <img src={iconLinkedIn} />
                    </a>
                  </div>
                </div>

                <p className="copyright-text">
                  &copy; 2020 Open Government Products, Government Technology
                  Agency of Singapore
                </p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default OgpFooter;
