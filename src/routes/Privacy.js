import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Privacy.scss";

class Privacy extends Component {
  render() {
    return (
      <section className="privacy-page-container">
        <div className="legal-header-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="legal">
                  <h1>Privacy Policy</h1>
                  <p>Version 3.6, Updated 17 July 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="legal-body-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="legal">
                  <div className="legal-section">
                    <div className="clause-set">
                      <div className="clause-numbering">1.</div>
                      <div className="clause-text">
                        This is a Government agency digital service. This
                        Privacy Policy must be read in conjunction with the
                        Terms of Use that accompany the applicable service you
                        are requesting from us (the “<strong>Service</strong>”).
                        In this Privacy Policy, “
                        <strong>Public Sector Entities</strong>” means the
                        Government (including its ministries, departments and
                        organs of state) and public authorities (such as
                        statutory boards).
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">2.</div>
                      <div className="clause-text">
                        Insofar as the Service consists of or is provided to you
                        through a website, please note that:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">2.1.</div>
                        <div className="clause-text">
                          We may use "cookies", where a small data file is sent
                          to your browser to store and track information about
                          you when you enter our websites. The cookie is used to
                          track information such as the number of users and
                          their frequency of use, profiles of users and their
                          preferred sites. While this cookie can tell us when
                          you enter our sites and which pages you visit, it
                          cannot read data off your hard disk.
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">2.2.</div>
                        <div className="clause-text">
                          You can choose to accept or decline cookies. Most web
                          browsers automatically accept cookies, but you can
                          usually modify your browser setting to decline cookies
                          if you prefer. This may prevent you from taking full
                          advantage of the website.
                        </div>
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">3.</div>
                      <div className="clause-text">
                        We may request certain types of data from you in
                        connection with your access or use of the Service. The
                        data that may be requested include those identified in
                        the Annex herein. Your data may be stored in our
                        servers, systems or devices, in the servers, systems or
                        devices of our third party service providers or
                        collaborators, or on your device, and may be used by us
                        or our third party service providers or collaborators to
                        facilitate your access or use of the Service. We or our
                        third party service providers or collaborators may
                        collect system configuration information and/or traffic
                        information (such as an IP address) and/or use
                        information or statistical information to operate,
                        maintain or improve the Services or the underlying
                        service of the third party service provider or
                        collaborator. For the avoidance of doubt, in this
                        Privacy Policy, a reference to a third party service
                        provider or collaborator includes other third parties
                        who provide a service or collaborate with our third
                        party service provider or collaborator.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">4.</div>
                      <div className="clause-text">
                        If you provide us with personally identifiable data:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">4.1.</div>
                        <div className="clause-text">
                          We may use, disclose and process the data for any one
                          or more of the following purposes:
                        </div>
                      </div>
                      <div className="clause-set-child-group">
                        <div className="clause-set">
                          <div className="clause-numbering">4.1.1</div>
                          <div className="clause-text">
                            to assist, process and facilitate your access or use
                            of the Service;
                          </div>
                        </div>
                        <div className="clause-set">
                          <div className="clause-numbering">4.1.2</div>
                          <div className="clause-text">
                            to administer, process and facilitate any
                            transactions or activities by you, whether with us
                            or any other Public Sector Entity or third party
                            service provider or collaborator, and whether for
                            your own benefit, or for the benefit of a third
                            party on whose behalf you are duly authorized to
                            act;
                          </div>
                        </div>
                        <div className="clause-set">
                          <div className="clause-numbering">4.1.3</div>
                          <div className="clause-text">
                            to carry out your instructions or respond to any
                            queries, feedback or complaints provided by (or
                            purported to be provided by) you or on your behalf,
                            or otherwise for the purposes of responding to or
                            dealing with your interactions with us;
                          </div>
                        </div>
                        <div className="clause-set">
                          <div className="clause-numbering">4.1.4</div>
                          <div className="clause-text">
                            to monitor and track your usage of the Service, to
                            conduct research, data analytics, surveys, market
                            studies and similar activities, in order to assist
                            us in understanding your interests, concerns and
                            preferences and improving the Service (including any
                            service of a third party service provider or
                            collaborator) and other services and products
                            provided by Public Sector Entities. For the
                            avoidance of doubt, we may also collect, use,
                            disclose and process such information to create
                            reports and produce statistics regarding your
                            transactions with us and your usage of the Services
                            and other services and products provided by Public
                            Sector Entities for record-keeping and reporting or
                            publication purposes (whether internally or
                            externally);
                          </div>
                        </div>
                        <div className="clause-set">
                          <div className="clause-numbering">4.1.5</div>
                          <div className="clause-text">
                            for the purposes of storing or creating backups of
                            your data (whether for contingency or business
                            continuity purposes or otherwise), whether within or
                            outside Singapore;
                          </div>
                        </div>
                        <div className="clause-set">
                          <div className="clause-numbering">4.1.6</div>
                          <div className="clause-text">
                            to enable us to contact you or communicate with you
                            on any matters relating to your access or use of the
                            Service, including but not limited to the purposes
                            set out above, via email, SMS, instant messaging,
                            push notifications or such other forms of
                            communication that we may introduce from time to
                            time depending on the functionality of the Service
                            and/or your device.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">4.2</div>
                        <div className="clause-text">
                          We may share necessary data with other Public Sector
                          Entities, and third party service providers in
                          connection with the Service, so as to provide the
                          Service to you in the most efficient and effective way
                          unless such sharing is prohibited by law.
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">4.3</div>
                        <div className="clause-text">
                          We will NOT share your personal data with entities
                          which are not Public Sector Entities, except where
                          such sharing is necessary for such entities to assist
                          us in providing the Service to you or for fulfilling
                          any of the purposes herein.
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">4.4</div>
                        <div className="clause-text">
                          For your convenience, we may also display to you data
                          you had previously supplied us or other Public Sector
                          Entities. This will speed up the transaction and save
                          you the trouble of repeating previous submissions.
                          Should the data be out-of-date, please supply us the
                          latest data.
                        </div>
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">5.</div>
                      <div className="clause-text">
                        Please note that we may be required to disclose your
                        data by law, including any law governing the
                        use/provision of any service of a third party service
                        provider or collaborator.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">6.</div>
                      <div className="clause-text">
                        To safeguard your personal data, all electronic storage
                        and transmission of personal data is secured with
                        appropriate security technologies.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">7.</div>
                      <div className="clause-text">
                        You may withdraw your consent to the use and disclosure
                        of your data by us with reasonable notice and subject to
                        any prevailing legal or contractual restrictions;
                        however, doing so may prevent the proper functioning of
                        the Service and may also result in the cessation of the
                        Service to you.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">8.</div>
                      <div className="clause-text">
                        The Service may contain links to external sites whose
                        data protection and privacy practices may differ from
                        ours. We are not responsible for the content and privacy
                        practices of these other websites and encourage you to
                        consult the privacy notices of those sites.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">9.</div>
                      <div className="clause-text">
                        Please contact
                        <a href="mailto:feedback@redeem.gov.sg ">
                          feedback@redeem.gov.sg
                        </a>
                        if you:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">9.1.</div>
                        <div className="clause-text">
                          have any enquiries or feedback on our data protection
                          policies and procedures; or
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">9.2.</div>
                        <div className="clause-text">
                          need more information on or access to data which you
                          have provided to us in the past.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="legal-section">
                    <h5>Additional Terms</h5>
                    <div className="clause-set">
                      <div className="clause-numbering">1.</div>
                      <div className="clause-text">
                        The app may contain links to other websites or services
                        whose data collection and use policies and privacy
                        practices may differ from ours. We are not responsible
                        for and will have no liability in connection with the
                        content or privacy practices of such other websites.
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">2.</div>

                      <div className="clause-text">
                        GovTech reserves the right to amend its data protection
                        policy and the information published about the said
                        policy from time to time. While GovTech takes reasonable
                        care to ensure that information published about its said
                        policy is up-to-date, GovTech does not guarantee the
                        accuracy or completeness of such information.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3.</div>

                      <div className="clause-text">
                        If you are a redeemer of Items, then for the purpose of
                        this Privacy Policy, distributors of Items are deemed to
                        be third party collaborators. Notwithstanding Clause 4.3
                        of the Privacy Policy, your data may be shared with such
                        distributors to facilitate the redemption of Items by
                        you. The distributor may have additional terms or its
                        own privacy policy which applies to such redemption.
                        GovTech may (without prejudice to the Privacy Policy)
                        use your data (such as your mobile or NRIC number) for
                        investigative purposes (such as fraud prevention), or
                        for purposes of appeals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Privacy;
