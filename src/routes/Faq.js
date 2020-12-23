import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as IconChevronRight } from "img/icons/bx-chevron-right.svg";
import "./Faq.scss";

class Faq extends Component {
  render() {
    return (
      <div className="faq-page-container">
        <div className="faq-header container">
          <div className="row">
            <div className="col-12">
              <h1>Frequently Asked Questions</h1>
              <h2>General FAQ</h2>
              <p>Updated 1 December 2020</p>
            </div>
          </div>
        </div>
        <div className="faq-body container">
          <div className="row">
            <div className="col-12">
              <section className="faq-note">
                <p>
                  For a more complete set of FAQs on the programme, please refer
                  to the CFHP FAQs
                </p>
              </section>
              <section className="faq-group">
                <h3>FAQ Group Title</h3>
                <div className="all-questions">
                  {/* each question */}
                  <div className="question-answer-group">
                    <input id="qn-1" type="checkbox" />
                    <label for="qn-1" className="question">
                      <div class="icon">
                        <IconChevronRight />
                      </div>
                      <span>What is RedeemSG?</span>
                    </label>
                    <div className="answer">
                      <p>
                        RedeemSG is a system being used to enable government
                        agencies and charities to easily track redemption of
                        vouchers. This comprises of:
                        <ul>
                          <li>
                            An admin portal that allows agencies to create
                            vouchers, send vouchers and track voucher
                            redemptions.{" "}
                          </li>
                          <li>
                            E-vouchers that get sent to citizens via SMS that
                            open up in a web link, and{" "}
                          </li>
                          <li>
                            an API that merchants can integrate with to
                            instantly invalidate vouchers.{" "}
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  {/* each question ends here */}
                  {/* each question */}
                  <div className="question-answer-group">
                    <input id="qn-2" type="checkbox" />
                    <label for="qn-2" className="question">
                      <div class="icon">
                        <IconChevronRight />
                      </div>
                      <span>What is RedeemSG?</span>
                    </label>
                    <div className="answer">
                      <p>
                        RedeemSG is a system being used to enable government
                        agencies and charities to easily track redemption of
                        vouchers. This comprises of:
                        <ul>
                          <li>
                            An admin portal that allows agencies to create
                            vouchers, send vouchers and track voucher
                            redemptions.{" "}
                          </li>
                          <li>
                            E-vouchers that get sent to citizens via SMS that
                            open up in a web link, and{" "}
                          </li>
                          <li>
                            an API that merchants can integrate with to
                            instantly invalidate vouchers.{" "}
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  {/* each question ends here */}
                  {/* each question */}
                  <div className="question-answer-group">
                    <input id="qn-3" type="checkbox" />
                    <label for="qn-3" className="question">
                      <div class="icon">
                        <IconChevronRight />
                      </div>
                      <span>What is RedeemSG?</span>
                    </label>
                    <div className="answer">
                      <p>
                        RedeemSG is a system being used to enable government
                        agencies and charities to easily track redemption of
                        vouchers. This comprises of:
                        <ul>
                          <li>
                            An admin portal that allows agencies to create
                            vouchers, send vouchers and track voucher
                            redemptions.{" "}
                          </li>
                          <li>
                            E-vouchers that get sent to citizens via SMS that
                            open up in a web link, and{" "}
                          </li>
                          <li>
                            an API that merchants can integrate with to
                            instantly invalidate vouchers.{" "}
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
    );
  }
}

export default Faq;
