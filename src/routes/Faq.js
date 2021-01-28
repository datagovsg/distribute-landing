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

                <p>Updated 19 Jan 2021</p>
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
                  <h3>1. General</h3>
                  <div className="all-questions">
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-1-1" type="checkbox" />
                      <label for="qn-1-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>1.1 What is DistributeSG?</span>
                      </label>
                      <div className="answer">
                        <p>
                          DistributeSG is a solution being used by the Singapore
                          Government to track the distribution of goods. It is
                          used by the Community Development Councils to track
                          distribution of paper vouchers.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-1-2" type="checkbox" />
                      <label for="qn-1-2" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>1.2 Who uses DistributeSG?</span>
                      </label>
                      <div className="answer">
                        <p>
                          Currently, DistributeSG is being used by the Community
                          Development Councils/ Community Centres for the
                          distribution of paper vouchers for CDC Vouchers Scheme
                          Tranche 2.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-1-3" type="checkbox" />
                      <label for="qn-1-3" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>1.3 How does DistributeSG work?</span>
                      </label>
                      <div className="answer">
                        <p>
                          Government agencies pre-register a list of community
                          centres and users, depending on the types of access
                          such as:
                        </p>
                        <ul>
                          <li>Campaign admin portal user</li>
                          <li>Campaign admin app user – Permanent</li>
                          <li>Campaign admin app user – Temporary</li>
                        </ul>
                        <p>
                          before the distribution starts. For details on access
                          rights, please refer to Question 2-4. To see what each
                          user can access, watch this{" "}
                          <a
                            href="https://youtu.be/5VrWVkZ7i3k"
                            target="_blank"
                          >
                            video
                          </a>
                        </p>
                        <table>
                          <tr>
                            <th>Campaign Admin Portal User</th>
                            <td>Admin Portal user with access via email</td>
                          </tr>
                          <tr>
                            <th>Campaign Admin App User - Permanent</th>
                            <td>
                              DistributeSG App user with access via mobile
                              number, mobile number was already whitelisted
                              prior to distribution
                            </td>
                          </tr>
                          <tr>
                            <th>Campaign Admin App User – Temporary</th>
                            <td>
                              DistributeSG App user that scanned a DistributeSG
                              Campaign Admin App User’s campaign QR to gain
                              access.{" "}
                            </td>
                          </tr>
                        </table>
                        <p>
                          App users simply log in using their mobile number. App
                          users will have access to disburse the vouchers at
                          particular locations.
                        </p>
                        <p>
                          App users can scan or type the NRIC to search whether
                          the recipient has redeemed before. Then, app users can
                          disburse vouchers at their current location. They are
                          able to view overall statistics of the campaign.
                        </p>
                        <p>
                          Campaign admins log into the portal via email. They
                          will be able to see the overall statistics of the
                          campaign. They also are able to search for particular
                          collection and download the collection report for a
                          campaign for reporting purposes.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                  </div>
                </section>
                <section className="faq-group">
                  <h3>2. Accessing the DistributeSG mobile app</h3>
                  <div className="all-questions">
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-1" type="checkbox" />
                      <label for="qn-2-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.1 Where should I download the DistributeSG mobile
                          app?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          You can download the latest version of the
                          DistributeSG mobile app from{" "}
                          <a
                            href="https://apps.apple.com/us/app/distributesg/id1546261679"
                            target="_blank"
                          >
                            Apple’s App store
                          </a>{" "}
                          or{" "}
                          <a
                            href="https://play.google.com/store/apps/details?id=sg.gov.distribute&hl=en_US&gl=US"
                            target="_blank"
                          >
                            Google Play store
                          </a>
                          . Please do not download from any other third party
                          store as these are unofficial versions. Please check
                          with the respective CDCs to ensure that you have
                          downloaded the latest app version.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-2" type="checkbox" />
                      <label for="qn-2-2" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span className="question-no">2.2</span>
                        <span>
                          How do I gain access to the DistributeSG mobile app to
                          disburse the vouchers?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          There are 2 types of mobile app users:
                          <ul>
                            <li>
                              Campaign admin app users – Permanent user (i.e.
                              registered staff with DistributeSG)
                            </li>
                            <li>
                              Campaign admin app users – Temporary user (i.e.
                              non-registered staff with DistributeSG)
                            </li>
                          </ul>
                        </p>
                        <p>
                          To have access to the DistributeSG mobile app, details
                          such as name of staff and mobile number must be
                          registered by GovTech in advance. To log into
                          DistributeSG mobile app, you can log in using a One
                          Time Password (OTP) sent to your mobile number.
                        </p>
                        <p>
                          If you are a registered staff with DSG, you will be
                          able to disburse the voucher after keying in the OTP.
                        </p>
                        <p>
                          If you are a non-registered staff, after keying the
                          OTP, you will be prompted to scan the Campaign QR code
                          generated from the mobile app of a registered staff
                          with DSG.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-3" type="checkbox" />
                      <label for="qn-2-3" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.3 I get stuck at the “Add collection point” page.
                          How can I start using the app? How do I proceed?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Please find a registered Campaign admin app user and
                          scan their QR code to start using the app.
                        </p>
                        <p>
                          Upon scanning their QR code, you will have access to
                          all the campaign’s locations. Then, you will need to
                          switch the location to be able to record disbursed
                          vouchers at your current location.
                        </p>
                        <p>
                          Alternatively, have them send the Campaign Access QR
                          code over whatsapp to your fellow volunteers/ staff or
                          print the QR code out for scanning. These QR codes
                          change at Sunday 11.59pm each week, so you will need
                          to scan the QR code every week to disburse the
                          vouchers.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-4" type="checkbox" />
                      <label for="qn-2-4" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.4 What can the Campaign Admin App users (i.e.
                          registered staff) access? What can Campaign Admin
                          Temporary App users (i.e. non-registered staff)
                          access?
                        </span>
                      </label>
                      <div className="answer">
                        <table>
                          <tr>
                            <th>Description</th>
                            <th>
                              Campaign Admin App User – Permanent (i.e.
                              registered staff with DSG)
                            </th>
                            <th>
                              Campaign Admin App User – Temporary (i.e.
                              non-registered staff with DSG) Able to access
                              mobile app by scanning the QR Code from Point of
                              Contact
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <strong>Access</strong>
                            </td>
                            <td>
                              <ul>
                                <li>
                                  {" "}
                                  Scan or type NRIC and search for previous
                                  voucher disbursement for a recipient. See
                                  where, when and what item was redeemed
                                  previously for this recipient{" "}
                                </li>
                                <li>
                                  Disburse vouchers for beneficiaries
                                  (identified by NRIC and address for
                                  households)
                                </li>
                                <li>
                                  See overall statistics for how many are
                                  redeemed at each community centre
                                </li>
                              </ul>
                            </td>
                            <td>
                              <ul>
                                <li>
                                  {" "}
                                  Scan or type NRIC and search for previous
                                  voucher disbursement for a recipient. See
                                  where, when and what item was redeemed
                                  previously for this recipient{" "}
                                </li>
                                <li>
                                  Disburse vouchers for beneficiaries
                                  (identified by NRIC and address for
                                  households)
                                </li>
                                <li>
                                  See overall statistics for how many are
                                  redeemed at each community centre
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Users (To be Confirmed)</strong>
                            </td>
                            <td>
                              <ul>
                                <li>GCDs</li>
                                <li>CDs</li>
                                <li>DCDs</li>
                              </ul>
                            </td>
                            <td>
                              <ul>
                                <li>CC Staff</li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-5" type="checkbox" />
                      <label for="qn-2-5" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.5 Do the QR codes or temporary app users’ access
                          expire?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Yes, QR codes expire at Sunday 11.59pm every week.
                          This is to ensure that volunteers who only help out
                          for part of the campaign will not be able to access
                          the DistributeSG mobile app.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-6" type="checkbox" />
                      <label for="qn-2-6" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.6 I earlier submitted a list of staff to be added as
                          permanent app users. Why are they still unable to
                          access the mobile app?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Permanent App users are added on a regular monthly
                          cycle on the first working day of the month. Please
                          ensure you have submitted the name and mobile number
                          of those that need to be added to the respective CDCs.
                          They will be added in the next cycle.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-7" type="checkbox" />
                      <label for="qn-2-7" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.7 I am a Temporary App User. Right now the location
                          shown in the app is different from the one that I am
                          at. How do I change location?
                        </span>
                      </label>
                      <div className="answer">
                        <ol>
                          <li>
                            Click on the name of the location on top, or the
                            menu button on the top left hand corner -> select
                            “location”
                          </li>
                          <li>
                            Click on your current location, e.g. “Jurong Green
                            CC”
                          </li>
                          <li>
                            If you are going to a new community centre, please
                            type in to search, select that new community centre
                            and click “save changes”
                          </li>
                        </ol>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-2-8" type="checkbox" />
                      <label for="qn-2-8" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          2.8 I am unable to scan the QR code/NRIC and it shows
                          me a dark grey screen. Can you help?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Please make sure that you allow DistributeSG to access
                          the phone camera.{" "}
                        </p>
                        <p>
                          If you’re using an Apple phone, go to Settings->
                          search “DistributeSG” -> Click on DistributeSG-> Allow
                          DistributeSG to Access Camera ->Turn on{" "}
                        </p>
                        <p>
                          If you’re using a Samsung phone, go to Settings->
                          Apps-> Search “DistributeSG”-> App info-> Under app
                          settings, click on “Permissions Camera” -> Enable
                        </p>
                        <p>
                          For all other phones, please check settings and go to
                          DistributeSG settings, and ensure that the camera is
                          enabled.{" "}
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                  </div>
                </section>
                <section className="faq-group">
                  <h3>3. CDC paper voucher distribution</h3>
                  <div className="all-questions">
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-3-1" type="checkbox" />
                      <label for="qn-3-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          3.1 Why are some addresses found on record and others
                          not found on record in the mobile app?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          The address will be found when scanning the NRIC if
                          they are in the eligibility list. For appeal cases
                          where the resident presented a letter of appeal, their
                          address will not be found in the mobile app, and you
                          will need to enter the address to disburse the
                          vouchers.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-3-2" type="checkbox" />
                      <label for="qn-3-2" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          3.2 What forms of identification is required?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Residents will need to bring down the letter and their
                          identification card with barcode (e.g. NRIC / Driving
                          License/ PAssion Card) for the collection of vouchers.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-3-3" type="checkbox" />
                      <label for="qn-3-3" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          3.3 How many voucher booklets are allowed per address?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Each household (identified by people sharing the same
                          address) can only redeem one set of CDC vouchers and
                          not more.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-3-4" type="checkbox" />
                      <label for="qn-3-4" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          3.4 The recipient asks for an extra set of paper
                          vouchers. (For example, because more than 1 family now
                          stays in the same address). How do I resolve this?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          As with the cases above, the recipient will need to
                          log an appeal to be reissued with an extra letter to
                          get the extra voucher booklet.
                        </p>{" "}
                        <p>
                          Please check with the CDC Division on the criteria and
                          approval process for handling these appeals.
                        </p>{" "}
                        <p>
                          Upon the recipient presenting this additional appeal
                          letter, you can log an extra redemption by swiping to
                          “redeem anyway” on the mobile app.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                  </div>
                </section>
                <section className="faq-group">
                  <h3>4. Admin Portal User</h3>
                  <div className="all-questions">
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-4-1" type="checkbox" />
                      <label for="qn-4-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          4.1 How do I gain access to the admin portal and
                          access the campaign?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Users will need to have a pa.gov.sg email to be able
                          to log into the admin portal. Users’ emails need to be
                          added to a campaign beforehand for them to be able to
                          access and manage a particular campaign.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                  </div>
                </section>
                <section className="faq-group">
                  <h3>5. Others</h3>
                  <div className="all-questions">
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-5-1" type="checkbox" />
                      <label for="qn-5-1" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>
                          5.1 Is there any email I can write to if I have any
                          feedback or questions?
                        </span>
                      </label>
                      <div className="answer">
                        <p>
                          Please kindly email{" "}
                          <a href="mailto:feedback@distribute.gov.sg">
                            feedback@distribute.gov.sg
                          </a>{" "}
                          if you have any questions. We would love to hear from
                          you.
                        </p>
                      </div>
                    </div>
                    {/* each question ends here */}
                    {/* each question */}
                    <div className="question-answer-group">
                      <input id="qn-5-2" type="checkbox" />
                      <label for="qn-5-2" className="question">
                        <div class="icon">
                          <IconChevronRight />
                        </div>
                        <span>5.2 Is there a training video? </span>
                      </label>
                      <div className="answer">
                        <p>
                          The training video will be made available to you via
                          your PA colleagues. A video on how to use the app may
                          be found{" "}
                          <a
                            href="https://youtu.be/--CYar_j7T4"
                            target="_blank"
                          >
                            here
                          </a>
                          .
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
