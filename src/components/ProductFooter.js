import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductFooter.scss";
import productLogo from "img/logo.svg";

class ProductFooter extends Component {
  render() {
    return (
      <div className="product-footer-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-logo">
                <img src={productLogo} />
                <p className="tagline">Make something great again!</p>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/index-agency">For Campaign Organisers</Link>
                  </li>
                  <li>
                    <Link to="/index-merchant">For Merchants</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use">Terms of Use</Link>
                  </li>
                  <li>
                    <a href="mailto:test@email.com">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductFooter;
