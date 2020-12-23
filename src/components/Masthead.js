import React, { Component } from "react";
import sgCrest from "img/sg-crest.svg";
import "./Masthead.scss";

class Masthead extends Component {
  render() {
    return (
      <div className="masthead-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="masthead-content">
                <img src={sgCrest} className="sg-crest" alt="Singapore Crest" />
                <p>A Singapore Government Website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Masthead;
