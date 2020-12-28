import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./Faq.scss";

class Faq extends Component {
  render() {
    return (
      <div className="faq-page-container">
        <div className="faq-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Frequently Asked Questions</h1>
                <h2>General FAQ</h2>
                <p>Updated 1 December 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <section className="faq-note">
                  <p></p>
                </section>
                <section className="faq-group">
                  <h3>General</h3>
                  <div className="all-questions">
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-1" type="checkbox" />
                      <label for="qn-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>What is DistributeSG?</span>
                      </label>
                      <div className="answer">
                        <p>
                          Distribute is a system being used to enable government
                          agencies and charities to easily distribute things to
                          citizens and households. This comprises of:
                          <ul>
                            <li>
                              An admin portal that allows agencies to create
                              vouchers, send vouchers and track voucher
                              redemptions.{" "}
                            </li>
                            <li>
                              a Verifier app that gound operation uses to help
                              update distribution status when they give out
                              items.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-1" type="checkbox" />
                      <label for="qn-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>What is DistributeSG?</span>
                      </label>
                      <div className="answer">
                        <p>
                          Distribute is a system being used to enable government
                          agencies and charities to easily distribute things to
                          citizens and households. This comprises of:
                          <ul>
                            <li>
                              An admin portal that allows agencies to create
                              vouchers, send vouchers and track voucher
                              redemptions.{" "}
                            </li>
                            <li>
                              a Verifier app that gound operation uses to help
                              update distribution status when they give out
                              items.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
