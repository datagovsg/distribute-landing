import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./TermsOfUse.scss";

class TermsOfUse extends Component {
  render() {
    return (
      <section className="terms-of-use-page-container">
        <div className="legal-header-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="legal">
                  <h1>Terms of Use</h1>
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
                      <div className="clause-numbering">
                        <strong>1.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>General</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">1.1.</div>
                      <div className="clause-text">
                        These Terms of Use govern your access to and use of our
                        services, including the application (whether as software
                        or as a website or otherwise), its contents, push
                        notifications and all other accompanying materials as
                        identified in the Schedule below (collectively, the
                        <strong>&nbsp;"Service”</strong>).
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">1.2.</div>
                      <div className="clause-text">
                        This Service is provided to you by the Government
                        Technology Agency (<strong>"Govtech”</strong>).
                        GovTech’s office is located at 10 Pasir Panjang Road,
                        #10-01, Mapletree Business City, Singapore 117438.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">1.3</div>
                      <div className="clause-text">
                        By accessing or using any part of this Service, you
                        unconditionally agree and accept to be legally bound by
                        these Terms of Use and any amendments thereto from time
                        to time. GovTech reserves the right to change these
                        Terms of Use at its sole discretion and at any time.
                        <strong>
                          You should read the Terms of Use carefully each time
                          you access or use any part of this Service as such
                          access or use will constitute your agreement to the
                          Terms of Use and any amendments to it.
                        </strong>
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">1.4.</div>
                      <div className="clause-text">
                        <strong>
                          If you do not agree to these Terms of Use, please do
                          not use this Service or any part of this Service.
                        </strong>
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">1.5.</div>
                      <div className="clause-text">
                        If you are accessing or using the Service for and on
                        behalf of another entity (such as your employer), you
                        warrant and represent that you have the necessary
                        authority to bind such entity to these Terms of Use.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>2.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Nature of this Service</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering"></div>
                      <div className="clause-text">
                        Please see the Schedule for more information and terms
                        concerning this Service.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>3.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Licence Terms and Restrictions </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3.1</div>
                      <div className="clause-text">
                        The Service, including the materials made available on
                        or through the Service, is owned by, licensed to,
                        managed or controlled by GovTech. Please see clause 4
                        (Third Party Materials) for more information.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3.2</div>
                      <div className="clause-text">
                        Subject to these Terms of Use, GovTech grants to you a
                        non-exclusive, revocable, and non-transferable right to
                        access and use the Service for personal or internal
                        purposes only, and only for such use permitted by the
                        functions of the Service and intended by GovTech. You
                        shall not, amongst other things, benchmark, reproduce,
                        modify, reverse-engineer, decompile, adapt, publish,
                        redistribute or sublicense the Service or any part of
                        the Service without the prior written consent of GovTech
                        or the respective third party owners. You also shall not
                        use the Service in violation of any applicable laws or
                        agreements that you have with any third parties. All
                        express or implied rights to the Service not
                        specifically granted herein are expressly reserved to
                        GovTech.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3.3</div>
                      <div className="clause-text">
                        GovTech reserves the right to:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">3.3.1.</div>
                        <div className="clause-text">
                          Update or modify this Service from time to time;
                        </div>
                      </div>

                      <div className="clause-set">
                        <div className="clause-numbering">3.3.2</div>
                        <div className="clause-text">
                          Deny or restrict access to or use of the Service by
                          any particular person without ascribing any reasons
                          whatsoever; and
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">3.3.3</div>
                        <div className="clause-text">
                          Discontinue or terminate this Service at any time
                          without notice or liability to you whatsoever,
                          whereupon all rights granted to you hereunder shall
                          also terminate forthwith. You shall further upon
                          notice from GovTech return or destroy all copies of
                          the Service or materials therein that you may have
                          downloaded.
                        </div>
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">3.4</div>
                      <div className="clause-text">
                        You will not interfere or attempt to interfere with the
                        proper working of the Service or otherwise do anything
                        that imposes an unreasonable or disproportionately large
                        load on GovTech’s servers.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>3A.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Account Access and Security</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3A.1</div>
                      <div className="clause-text">
                        You are solely responsible for maintaining the
                        confidentiality and security of any authentication
                        credentials associated with your use of the Service,
                        including the security of any of your devices which
                        store the authentication credentials.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3A.2</div>
                      <div className="clause-text">
                        GovTech shall be entitled, but not obliged, to verify
                        the identity of the person using the Service. Without
                        prejudice to the foregoing, GovTech is not under any
                        duty to verify that any biometric identifier used with
                        the Service, or on your device, belongs to you.
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">3A.3</div>
                      <div className="clause-text">
                        GovTech shall have the sole and absolute discretion to
                        invalidate any authentication credentials at any time,
                        or require you to have to re-authenticate or refresh
                        your authentication credentials at any time, without
                        having to give any reason for the same.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3A.4</div>
                      <div className="clause-text">
                        GovTech shall be entitled, but not obliged, to act upon
                        or rely on any instructions, information, transmissions
                        of data, or communications received from the account or
                        use of the Service in relation to your authentication
                        credentials, as if such instructions, information, data
                        or communications were issued by you, whether or not the
                        same was authorized by you.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">3A.5</div>
                      <div className="clause-text">
                        For the avoidance of doubt, you are solely responsible
                        for any loss of whatever nature arising from
                        unauthorized or unofficial modifications made to your
                        device which permit or escalate privileged access, or
                        remove restrictions to such access, which are not
                        intended by the manufacturer or provider of your device
                        or operating system of your device (e.g., “rooting” or
                        “jailbreaking” your mobile phone).
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>4.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Third Party Materials </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">4.1</div>
                      <div className="clause-text">
                        The Service may require, enable or facilitate access to
                        or use of software or services of a third party (“
                        <strong>Third Party Terms</strong>”). In such an event,
                        there may be terms of use of the third party software or
                        service (the “<strong>Third Party Terms</strong>”).
                        GovTech may be required under or as a result of the
                        Third Party Terms to notify you of certain terms that
                        apply to you (either directly as an end user, or as a
                        party whose acts or omissions could cause GovTech to
                        breach the Third Party Terms) when you use the Services.
                        An example of Third Party Terms may be open source
                        software terms or standard form terms of the
                        distribution platform from which you obtain any part of
                        the Service (e.g. Google Play Store or Apple App Store
                        terms) which bind GovTech as a developer or user of the
                        distribution platform (the “
                        <strong>Distribution Terms</strong>”). Information on
                        the Third Party Terms are embedded in the Service,
                        already accounted for in these Terms of Use, publicly
                        available (e.g the Distribution Terms) or otherwise
                        listed in the Schedule herein. For the avoidance of
                        doubt, insofar as this Clause 4 relates to the
                        Distribution Terms, the relevant Distribution Terms are
                        the terms of the specific platform from which you
                        obtained a copy of the software or application that is
                        part of the Service. For example, if you obtained the
                        said copy from the Google Play Store, then the relevant
                        terms are Google’s Distribution Terms.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">4.2</div>
                      <div className="clause-text">
                        <strong>
                          It is your responsibility to check and read the most
                          up-to-date versions of these Third Party Terms and you
                          are deemed to have notice of the same.&nbsp;
                        </strong>
                        In particular, you are deemed to have notice of the
                        Third Party Terms that GovTech (under the Third Party
                        Terms) is required to notify you, and you
                        unconditionally agree to be bound by all the obligations
                        in the Third Party Terms which are applicable to you as
                        the end user. For the avoidance of doubt, where Third
                        Party Terms are listed, such Third Party Terms shall be
                        deemed to include any privacy policies and acceptable
                        use policies as are applicable to you.
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">4.3</div>
                      <div className="clause-text">
                        If the Third Party Terms require you to enter into an
                        agreement directly with the Third Party, then you
                        unconditionally agree to enter into such agreement, and
                        in any event, to be legally bound by the Third Party
                        Terms. For the avoidance of doubt:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">4.3.1.</div>
                        <div className="clause-text">
                          some Third Party Terms (particularly open-source
                          terms) permit either a direct licence to you from the
                          Third Party or a sublicence from GovTech to you. In
                          such cases, your licence is a direct licence from the
                          Third Party to you; and
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">4.3.2</div>
                        <div className="clause-text">
                          the terms of your agreement with the Third Party will
                          govern your use of the relevant third party software
                          or service, and not these Terms of Use.
                        </div>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">4.4</div>
                      <div className="clause-text">
                        If the Third Party Terms expressly or impliedly require
                        GovTech to incorporate certain terms in these Terms of
                        Use (inclusive of terms which impose any minimum or
                        maximum standards herein, and/or terms described in
                        Clause 4.5 below), such terms are deemed to have been so
                        incorporated (the “<strong>Incorporated Terms</strong>
                        ”). Examples of Incorporated Terms include provisions
                        which require GovTech to give you notice of certain
                        rights and liabilities or require GovTech to ensure that
                        you acknowledge certain matters. Similarly, if the Third
                        Party Terms expressly or impliedly require these Terms
                        of Use to be altered such that the Third Party Terms are
                        complied with, the parties herein agree that the Terms
                        of Use shall be deemed to be so altered but only to the
                        extent necessary for compliance.
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">4.5</div>
                      <div className="clause-text">
                        Some Third Party Terms grant the Third Party, or require
                        GovTech to grant the Third Party, direct rights of
                        enforcement of these Terms of Use as a third party
                        beneficiary, against you. Such Third Party Terms are
                        deemed to have been incorporated into these Terms of Use
                        as Incorporated Terms, and you hereby agree to grant
                        such Third Party, such direct rights of enforcement
                        against you.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">4.5</div>
                      <div className="clause-text">
                        For the avoidance of doubt, without prejudice to Clause
                        4.4, to the extent of any inconsistency between these
                        Terms of Use and the Third Party Terms, the latter shall
                        prevail provided nothing in the Third Party Terms
                        increases the liability of GovTech beyond that stated in
                        Clause 6.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>5</strong>
                      </div>
                      <div className="clause-text">
                        <strong>
                          Your Consent to Access Functions of Your Device
                        </strong>
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>5A.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>
                          Ownership of Feedback/Requests/Suggestions
                        </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering"></div>
                      <div className="clause-text">
                        You agree that all title and interest in any feedback,
                        requests or suggestions from you concerning the Services
                        shall be owned by GovTech.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>5B.</strong>
                      </div>
                      <div className="clause-text">
                        <strong> Confidentiality </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">5B.1</div>
                      <div className="clause-text">
                        If you receive information or data (in whatever form)
                        from GovTech or a Third Party which is designated
                        confidential or proprietary or is otherwise reasonably
                        understood to be confidential or proprietary
                        (collectively, “
                        <strong>Confidential Information</strong>”), you shall
                        not use, disclose or reproduce the Confidential
                        Information except for the purpose for which it was
                        provided to you. If consent to disclose the Confidential
                        Information to a third party is given by GovTech or the
                        Third Party to you, any act or omission in respect of
                        the Confidential Information by that person shall be
                        deemed to be your act or omission and you agree to be
                        fully liable for the same. In all cases, you shall
                        protect the Confidential Information to the same extent
                        you protect your own confidential information but in no
                        event less than a reasonable standard of care. You shall
                        ensure that any recipients are bound by confidentiality
                        terms at least as restrictive as this Clause.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">5B.2</div>
                      <div className="clause-text">
                        You shall destroy any Confidential Information
                        immediately upon request by GovTech or the Third Party.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">5B.3</div>
                      <div className="clause-text">In the event:</div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">5B.3.1</div>
                        <div className="clause-text">
                          you are, or likely to be, required by an order of
                          court to disclose Confidential Information; or
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">5B.3.2</div>
                        <div className="clause-text">
                          you have reasonable grounds to suspect the
                          unauthorised use or disclosure or reproduction of
                          Confidential Information;
                        </div>
                      </div>
                      you shall immediately notify GovTech or the Third Party of
                      the same and cooperate with GovTech or the Third Party to
                      prevent or limit such disclosure.
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">5B.4</div>
                      <div className="clause-text">
                        Nothing in this Clause 5B shall prejudice GovTech’s or
                        the Third Party’s other rights at law.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>6.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Disclaimers and Indemnity </strong>
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>6.1</strong>
                      </div>
                      <div className="clause-text">
                        <strong>
                          The Service is provided on an "as is" and “as
                          available” basis without warranties of any kind. To
                          the fullest extent permitted by law, GovTech does not
                          make any representations or warranties of any kind
                          whatsoever in relation to the Service and hereby
                          disclaims all express, implied and/or statutory
                          warranties of any kind to you or any third party,
                          whether arising from usage or custom or trade or by
                          operation of law or otherwise, including but not
                          limited to any representations or warranties:
                        </strong>
                      </div>
                    </div>

                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.1.1</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            as to the accuracy, completeness, correctness,
                            currency, timeliness, reliability, availability,
                            interoperability, security, non-infringement, title,
                            merchantability, quality or fitness for any
                            particular purpose of the Service; and/or
                          </strong>
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.1.2</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            that the Service or any functions associated
                            therewith will be uninterrupted or error-free, or
                            that defects will be corrected or that this Service,
                            website and the server are and will be free of all
                            viruses and/or other malicious, destructive or
                            corrupting code, programme or macro.
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>6.2</strong>
                      </div>
                      <div className="clause-text">
                        <strong>
                          GovTech shall also not be liable to you or any third
                          party for any damage or loss of any kind whatsoever
                          and howsoever caused, including but not limited to any
                          direct or indirect, special or consequential damages,
                          loss of income, revenue or profits, lost or damaged
                          data, or damage to your computer, software or any
                          other property, whether arising directly or indirectly
                          from –
                        </strong>
                      </div>
                    </div>

                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.2.1</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            your access to or use of this Service, or any part
                            thereof;
                          </strong>
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.2.2</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            any loss of access or use of this Service or any
                            part of this Service, howsoever caused;
                          </strong>
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.2.3</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            any inaccuracy or incompleteness in, or errors or
                            omissions in the transmission of, the Service;
                          </strong>
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.2.4</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            any delay or interruption in the transmission of the
                            Service, whether caused by delay or interruption in
                            transmission over the internet or otherwise; or
                          </strong>
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">
                          <strong>6.2.5</strong>
                        </div>
                        <div className="clause-text">
                          <strong>
                            any decision made or action taken by you or any
                            third party in reliance upon the Service,
                          </strong>
                        </div>
                      </div>
                      <strong>
                        regardless of whether GovTech has been advised of the
                        possibility of such damage or loss.
                      </strong>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>6.3</strong>
                      </div>
                      <div className="clause-text">
                        <strong>
                          Without prejudice and in addition to the foregoing,
                          insofar as the Service facilitates or requires the
                          provision, use or functioning of, or is provided in
                          conjunction with, other products, software, materials
                          and/or services not provided by GovTech, GovTech makes
                          no representation or warranty in relation to such
                          products, software, materials and/or services
                          (including without limitation any representation or
                          warranties as to timeliness, reliability,
                          availability, interoperability, quality, fitness for
                          purpose, non-infringement, suitability or accuracy).
                        </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">6.4</div>
                      <div className="clause-text">
                        You shall not rely on any part of the Service to claim
                        or assert any form of legitimate expectation against
                        GovTech, whether or not arising out of or in connection
                        with GovTech’s roles and functions as a public
                        authority.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">6.5</div>
                      <div className="clause-text">
                        You agree to defend and indemnify and keep GovTech and
                        its officers, employees, agents and contractors harmless
                        against all liabilities, losses, damages, costs or
                        expenses (including legal costs on an indemnity basis)
                        howsoever arising out of or in connection with your
                        access or use of the Service (including third party
                        software or services) or your non-compliance with the
                        Terms of Use, Third Party Terms or Incorporated Terms,
                        whether or not you had been advised or informed of the
                        nature or extent of such liabilities, losses, damages,
                        costs or expenses. You warrant and represent that your
                        access or use of the Service does not and will not
                        breach or violate any laws, regulations, trade, economic
                        and/or export sanctions (wherever in the world)
                        applicable to you, and that you shall not transmit any
                        malicious code, illegal, infringing or undesirable
                        content or materials to GovTech or its agents or any
                        Third Party.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>7.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Hyperlinks</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">7.1</div>
                      <div className="clause-text">
                        Insofar as the Service provides a hyperlink to material
                        not maintained or controlled by GovTech, GovTech shall
                        not be responsible for the content of the hyperlinked
                        material and shall not be liable for any damages or loss
                        arising from access to the hyperlinked material. Use of
                        the hyperlinks and access to such hyperlinked materials
                        are entirely at your own risk. The hyperlinks are
                        provided merely as a convenience to you and do not imply
                        endorsement by, association or affiliation with GovTech
                        of the contents of or provider of the hyperlinked
                        materials.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">7.3</div>
                      <div className="clause-text">
                        GovTech reserves all rights:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">7.3.1</div>
                        <div className="clause-text">
                          to disable any links to, or frames of, any materials
                          which are unauthorised (including without limitation
                          materials which imply endorsement by or association or
                          affiliation with GovTech, materials containing
                          inappropriate, profane, defamatory, infringing,
                          obscene, indecent or unlawful topics, names, or
                          information that violates any written law, any
                          applicable intellectual property, proprietary, privacy
                          or publicity rights); and
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">7.3.2</div>
                        <div className="clause-text">
                          to disclaim responsibility and/or liability for
                          materials that link to or frame any part of the
                          Service.
                        </div>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>8.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Privacy Policy</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering"></div>
                      <div className="clause-text">
                        You also agree to the terms of the Privacy Policy for
                        this Service as may be amended from time to time. The
                        Privacy Policy will form part of these Terms of Use.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>9.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Rights of Third Parties </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering"></div>
                      <div className="clause-text">
                        Subject to the rights of the Third Party, a person who
                        is not a party to this Terms of Use shall have no right
                        under the Contract (Rights of Third Parties) Act or
                        otherwise to enforce any of its terms.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>10.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Assignment</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">10.1</div>
                      <div className="clause-text">
                        You may not assign or sub-contract this Terms of Use
                        without the prior written consent of GovTech.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">10.2</div>
                      <div className="clause-text">
                        GovTech may assign, novate, transfer, or sub-contract
                        the rights and liabilities in respect of the Service and
                        this Terms of Use, without notifying you and without
                        further reference to you. Your acceptance of this Terms
                        of Use shall also constitute your consent to such
                        assignment, novation, transfer or sub-contract.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>10A.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Severability</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering"></div>
                      <div className="clause-text">
                        If any term of these Terms of Use is held by a court or
                        tribunal of competent jurisdiction to be invalid or
                        unenforceable, then these Terms of Use, including all of
                        the remaining terms, will remain in full force and
                        effect as if such invalid or unenforceable term had
                        never been included but, to the extent permissible, such
                        invalid or unenforceable terms shall be deemed to have
                        been replaced by terms that are (a) valid and
                        enforceable and (b) express the intention or produce the
                        result closest to the original intention of the invalid
                        or unenforceable terms.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>11.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Governing Law and Dispute Resolution</strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">11.1</div>
                      <div className="clause-text">
                        These Terms of Use shall be governed by and construed in
                        accordance with laws of Singapore.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">11.2</div>
                      <div className="clause-text">
                        Subject to clause 11.3, any dispute arising out of or in
                        connection with these Terms of Use, including any
                        question regarding its existence, validity or
                        termination, shall be referred to and finally resolved
                        in the Courts of the Republic of Singapore and the
                        parties hereby submit to the exclusive jurisdiction of
                        the Courts of the Republic of Singapore.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">11.3</div>
                      <div className="clause-text">
                        GovTech may, at its sole discretion, refer any dispute
                        referred to in clause 11.2 above to arbitration
                        administered by the Singapore International Arbitration
                        Centre (“<strong>SIAC</strong>”) in Singapore in
                        accordance with the Arbitration Rules of the SIAC ("
                        <strong>SIAC Rules</strong>") for the time being in
                        force, which rules are deemed to be incorporated by
                        reference in this clause. Further:
                      </div>
                    </div>
                    <div className="clause-set-child-group">
                      <div className="clause-set">
                        <div className="clause-numbering">11.3.1.</div>
                        <div className="clause-text">
                          The seat of the arbitration shall be Singapore.
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">11.3.2.</div>
                        <div className="clause-text">
                          The tribunal shall consist of one (1) arbitrator.
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">11.3.3.</div>
                        <div className="clause-text">
                          The language of the arbitration shall be English.
                        </div>
                      </div>
                      <div className="clause-set">
                        <div className="clause-numbering">11.3.4.</div>
                        <div className="clause-text">
                          All information, pleadings, documents, evidence and
                          all matters relating to the arbitration shall be
                          confidential.
                        </div>
                      </div>
                      Where GovTech is the defendant or respondent, it shall be
                      given at least 30 days before the commencement of any
                      legal action against it to elect to exercise the right
                      herein to have the dispute submitted to arbitration. This
                      right to elect shall not prejudice GovTech’s right to a
                      limitation defence and the period to exercise the right
                      shall not be abridged by reason of any accrual of a
                      limitation defence in favour of GovTech during the said
                      period.
                    </div>
                    <div className="clause-set">
                      <div className="clause-text spacing-top center">
                        These Terms of Use are dated 18 May 2020.
                      </div>
                    </div>
                  </div>

                  <div className="legal-section">
                    <h5>Schedule</h5>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>1.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Name of Service: </strong>RedeemSG
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>2.</strong>
                      </div>
                      <div className="clause-text">
                        <strong>Nature of Service</strong>
                      </div>
                    </div>

                    <div className="clause-set">
                      <div className="clause-numbering">a.</div>

                      <div className="clause-text">
                        This Service facilitates the tracking of the
                        distribution and redemption of goods, vouchers and
                        tickets (collectively, “<strong>Items</strong>”). The
                        “campaign” in this Schedule refers to any such
                        distribution programme. The Terms of Use apply to you
                        whether you are a distributor of the Items, or the
                        redeemer of such Items. The Service includes, without
                        limitation, APIs and administrative interfaces. GovTech
                        reserves the right to withhold from you or terminate
                        certain functionalities of the Service. For example, if
                        you are a redeemer of a voucher, you will not be granted
                        access to the administrator portal for tracking
                        redemption which is used by the distributor.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">b.</div>

                      <div className="clause-text">
                        GovTech <strong>DOES NOT</strong> manage and is &nbsp;
                        <strong>NOT</strong> responsible for the fulfilment and
                        quality of the operations involved in redemption of the
                        Items. As such, it is not responsible for ensuring
                        adequate supply of the Items. It is also not responsible
                        for any other services required for the campaign’s
                        operations - e.g. internet disruption at collection
                        points, advertising, or crown control measures. If you
                        as campaign owner have partnered with merchants for
                        distribution or redemption of your tickets or vouchers,
                        you are responsible for reimbursing such merchants.
                        Conversely, if you are a merchant distributing goods to
                        be redeemed by tickets/vouchers or to which such
                        tickets/vouchers relate, you are responsible for seeking
                        reimbursement from the campaign owner. GovTech is not
                        responsible for the terms of distribution or redemption,
                        if any, between the campaign owner and the merchant.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">c.</div>

                      <div className="clause-text">
                        GovTech <strong>DOES NOT</strong> own or decide on the
                        parameters for each distribution campaign, such as the
                        Items distributed and value of such Items. It does not
                        provide the eligibility criteria or recipient list for
                        the campaign. It does not manage the sign up of
                        recipients, verifiers, merchants and administrators of
                        the campaign. It also does not determine the
                        stakeholders involved and timeframe for each campaign.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">d.</div>

                      <div className="clause-text">
                        GovTech <strong>DOES NOT </strong>handle any payment to
                        or accept refunds from merchants for vouchers used at
                        their stores. It is not responsible for accounting,
                        financial reporting, financial reconciliation, financial
                        governance and audit entailed in voucher distribution
                        programmes.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">e.</div>

                      <div className="clause-text">
                        GovTech is <strong>NOT</strong> responsible for the
                        terms of voucher/ticket use at each merchant. Insofar as
                        a merchant is involved in a campaign, any issues
                        concerning payment (such as refunds and cancellations)
                        should be directed to the merchant or campaign owner.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">f.</div>

                      <div className="clause-text">
                        If you are a distributor of the Items, it is your
                        responsibility to ensure that any terms or privacy
                        policies concerning the distribution or redemption which
                        you require are communicated to the persons receiving
                        the Items, or to the person distributing the goods that
                        are to be redeemed or to which the tickets/vouchers
                        which are to be redeemed relate (such as partner
                        merchants). Your terms and privacy policy must be
                        consistent with the terms herein. In certain cases, you
                        might be requested to provide GovTech with a copy of
                        your terms to determine issues concerning redemption of
                        the Item.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">g.</div>

                      <div className="clause-text">
                        For the avoidance of doubt, partner merchants are also
                        deemed to be distributors and are bound to these Terms
                        of Use.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">h.</div>

                      <div className="clause-text">
                        Distributors of Items are responsible for ensuring
                        compliance with all applicable laws, including without
                        limitation the Personal Data Protection Act and Spam
                        Control Act, and any product regulations concerning the
                        Items (such as the Health Products Act, where relevant).
                        GovTech may require the redeemers to provide certain
                        data in order to use the Service, but it shall be the
                        distributors’ responsibility to obtain all necessary
                        consent from the redeemers.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">i.</div>

                      <div className="clause-text">
                        If you are a redeemer of Items, you are to note that the
                        distributor may impose additional terms or privacy
                        policies to the redemption of the Items.
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">j.</div>

                      <div className="clause-text">
                        If you are the campaign organizer (such as the
                        voucher/ticket issuer), you are required to agree to
                        additional terms in order to use the Service. Please
                        check with GovTech for details on these additional
                        terms.
                      </div>
                    </div>
                    <div className="spacing-sm"></div>
                    <div className="clause-set">
                      <div className="clause-numbering">
                        <strong>3.</strong>
                      </div>

                      <div className="clause-text">
                        <strong>Third party software/services </strong>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">a.</div>

                      <div className="clause-text">
                        Google’s distribution terms
                        <a href="https://play.google.com/about/developer-distribution-agreement.html">
                          https://play.google.com/about/developer-distribution-agreement.html
                        </a>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">b.</div>

                      <div className="clause-text">
                        Apple’s distribution terms -
                        <a href="https://developer.apple.com/services-account/download?path=/Documentation/License_Agreements__Apple_Developer_Program03232K20/Apple_Developer_Program_License_Agreement_20200323.pdf">
                          Apple Developer Program License Agreement
                        </a>
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">c.</div>

                      <div className="clause-text">
                        Twilio
                        <a href="https://www.twilio.com/legal/tos/2019">
                          https://www.twilio.com/legal/tos/2019
                        </a>
                        (in particular, the acceptable use and privacy policies)
                      </div>
                    </div>
                    <div className="clause-set">
                      <div className="clause-numbering">d.</div>

                      <div className="clause-text">
                        Postmark
                        <a href="https://postmarkapp.com/terms-of-service">
                          https://postmarkapp.com/terms-of-service
                        </a>
                        (in particular, the acceptable use and privacy policies)
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

export default TermsOfUse;
