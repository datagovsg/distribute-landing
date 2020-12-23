import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./ProductHeader.scss";
import productLogo from "img/logo.svg";

class ProductHeader extends Component {
  render() {
    function closeMenu() {
      const menuToggle = document.getElementById("menu-toggle-checkbox");
      console.log(menuToggle.checked);
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    }

    return (
      <div className="product-header-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1 header-left">
              <div className="product-logo">
                <Link to="/">
                  <img src={productLogo} />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-11 header-right">
              <div className="menu-container">
                <input
                  type="checkbox"
                  className="menu-toggle"
                  id="menu-toggle-checkbox"
                />
                <div className="menu-icon-hamburger">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
                  </svg> */}
                  <div></div>
                </div>

                <div className="menu-content">
                  <div className="overlay">
                    <nav className="container">
                      <ul>
                        <li>
                          <NavLink
                            to="index-agency"
                            activeClassName="active"
                            onClick={closeMenu}
                          >
                            For Campaign Organisers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/index-merchant"
                            activeClassName="active"
                            onClick={closeMenu}
                          >
                            For Merchants
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/faq"
                            activeClassName="active"
                            onClick={closeMenu}
                          >
                            FAQ
                          </NavLink>
                        </li>
                        {/* <li>
                          <NavLink
                            to="/privacy"
                            activeClassName="active"
                            onClick={closeMenu}
                          >
                            Privacy Policy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/terms-of-use"
                            activeClassName="active"
                            onClick={closeMenu}
                          >
                            Terms of Use
                          </NavLink>
                        </li> */}
                        <li>
                          <a href="mailto:test@email.com" onClick={closeMenu}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductHeader;
