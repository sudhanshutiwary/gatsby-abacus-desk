import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"

class Gsuite extends Component {
    render() {
        return (
            <>
                <section className="main-baner"
                    style={{
                        backgroundImage: `url(https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/main-banner-5.png)`,
                        backgroundSize: `cover`,
                        height: `670px`,
                        width: `100%`,
                        position: `relative`,
                    }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="banner-gsuite">
                                    <h1>
                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/12/2019-12-13.jpg" alt="" />
                          Starting from<br />
                                        <span>₹2,099</span> /user/year<br /><span class="tc"> T&amp;C apply</span></h1>
                                    <ul>
                                        <li><img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/award.png" className="scaled-image" alt="" />
                                        24x7 award winning <br /> support</li>
                                        <li><img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/offer.png" className="scaled-image" alt="" />
                                        Volume discounts on<br /> GSuite licenses</li>
                                        <li><img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/support.png" className="scaled-image" alt="" />
                                        Full migration support<br /> for enterprise customers</li>
                                        <li><img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/google.png" className="scaled-image" alt="" />
                                        The best in industry<br /> software by Google</li>
                                    </ul>
                                    <div className="form-header-wrap">
                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/12/premier-partner-badge.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="contact-form gsuite-form">
                                    <div className="row columns-wrapper">
                                        <div className="col  text-left col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="formContainerV2 parbase section">
                                                <div className="form-container-v2 sfdc-form-night sfdc-form-closed sfdc-form-small">

                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                            <h5>Get GSuite for Your Company</h5>
                                                            <div className="firstName textFieldInput">
                                                                <label>
                                                                    <input type="text" name="your-fullname-name" class="form-control gsuiteform gsuite-name" placeholder="Full Name" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                            <div class="firstName textFieldInput">
                                                                <label>
                                                                    <input type="email" name="your-email" class="form-control gsuiteform gsuite-email" placeholder="Work Email" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                            <div class="firstName textFieldInput">
                                                                <label>
                                                                    <input type="tel" name="your-phone" value="" class="form-control gsuiteform gsuite-number" placeholder="Phone" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                            <input type="submit" value="Send" class="gsuite-submit-main" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="businss-sec section-padding" id="section01">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="businss-cont">
                                    <h2>Your All-in-One Business App</h2>
                                    <h5>Get Gmail, Docs, Drive, Calendar and more for your business</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="businss-area">
                                    <div className="businss-connct">
                                        <h4>Connect</h4>
                                        <p>Reach your colleagues wherever they are</p>
                                    </div>

                                    <div className="businss-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/gmail.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/calendar_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/currents_logo.svg" className="scaled-image" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/chat_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/meet_24dp.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="businss-area">
                                    <div className="businss-connct">
                                        <h4>Create</h4>
                                        <p>Everything you need to bring your project to life</p>
                                    </div>

                                    <div className="businss-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/docs_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/sheets_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/forms_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/slides_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/atari_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/app_maker_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/keep_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/jamboard_24dp.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="businss-area">
                                    <div className="businss-connct">
                                        <h4>Access</h4>
                                        <p>Store files and find what you need instantly</p>
                                    </div>

                                    <div className="businss-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/drive_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/google_cloud_search_24dp.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="businss-area">
                                    <div className="businss-connct">
                                        <h4>Control</h4>
                                        <p>Manage users, devices, and data securely and easily</p>
                                    </div>

                                    <div className="businss-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/admin_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/vault_24dp.png" alt="" />
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/apps_policy_24dp.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="suit-edtion-sec" id="section02">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="suit-edtion-cont">
                                    <h2>Choose the G Suite Edition Suitable for Your Business</h2>
                                    <h5>Buy G Suite for Business and Work at the best price</h5>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="suit-box-cont">
                                    <h6>Basic Pricing</h6>
                                    <hr color="#fff" />
                                    <h3>Basic</h3>
                                    <h2>₹210</h2>
                                    <p>/ user / month</p>
                                    <p>plus tax</p>
                                </div>
                                <div className="suit-cont">
                                    <p>Business email address (you@yourcompany.com)</p>
                                    <p>Online Storage</p>
                                    <p>Voice &amp; Video meetings</p>
                                    <p>Integrated calendars</p>
                                    <p>Online text documents, spreadsheet and slides</p>
                                    <p>24/7 customer support</p>
                                    <p>Security and admin control</p>
                                    <div className="enqry-btn">
                                        <Link to="#">Inquire Now</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="suit-box-cont">
                                    <h6>Business Pricing</h6>
                                    <hr color="#fff" />
                                    <h3>Business</h3>
                                    <h2>₹714</h2>
                                    <p>/ user / month</p>
                                    <p>plus tax</p>
                                </div>
                                <div className="suit-cont">
                                    <p>Unlimited storage (or 1TB per user if fewer than 5 users)</p>
                                    <p>Audit and reporting insights for Drive content and sharing</p>
                                    <p>Google Vault for eDiscovery covering emails, chats, docs and files</p>
                                    <p>Business-critical data archiving</p>
                                    <p>Easily search and export to different formats</p>
                                    <p>24/7 customer support</p>
                                    <p>Archive all emails sent by your company</p>
                                    <div className="start-btn">
                                        <Link to="#">Inquire Now</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="suit-box-cont">
                                    <h6>Enterprise Pricing </h6>
                                    <hr color="#fff" />
                                    <h3>Enterprise</h3>
                                    <h2>₹1,650</h2>
                                    <p>/ user / month</p>
                                    <p>plus tax</p>
                                </div>
                                <div className="suit-cont">
                                    <p>Security and administration controls, Security center for G Suite</p>
                                    <p>Archive and set retention policies for emails and chats</p>
                                    <p>eDiscovery for emails, chats, and files</p>
                                    <p>Audit reports to track user activity</p>
                                    <p>Data loss prevention for Gmail &amp; Drive</p>
                                    <p>Hosted S/MIME for Gmail</p>
                                    <p>Enterprise-grade access control with security key enforcement</p>
                                    <div className="start-btn main-st">
                                        <Link to="#">Inquire Now</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="g-suit-sec" id="section03">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="g-suit-cont">
                                    <h2>Why G Suite?</h2>
                                    <h5>Business App that's tailor made for your workplace</h5>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="icons">
                                    <div className="g-suit-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/group-30.svg" alt="" />
                                    </div>

                                    <div className="icon-cont">
                                        <h4>you@your-domain.com</h4>
                                        <p>Build trusted Customer Relations with professional business email for your employees</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="icons">
                                    <div className="g-suit-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/group-32.svg" alt="" />
                                    </div>

                                    <div className="icon-cont">
                                        <h4>Unlimited Storage</h4>
                                        <p>Unlimited storage for your business on the Google Cloud</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="icons">
                                    <div className="g-suit-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/group-35.svg" alt="" />
                                    </div>

                                    <div className="icon-cont">
                                        <h4>24 X 7 Support</h4>
                                        <p>Round the clock support by certified G Suite specialists</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="icons">
                                    <div className="g-suit-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/group-38.svg" alt="" />
                                    </div>

                                    <div className="icon-cont">
                                        <h4>Real-Time Collaboration</h4>
                                        <p>Easily work on documents, spreadsheets, and slides across your devices, with or without internet</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="icons">
                                    <div className="g-suit-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/surface1.svg" alt="" />
                                    </div>

                                    <div className="icon-cont">
                                        <h4>Data Protection That You Can Trust and Tailor</h4>
                                        <p>Protect your company's data with security options like 2-step verification and single-sign-on</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="icons">
                                    <div className="g-suit-icon">
                                        <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/images/gsuite/group-39.svg" alt="" />
                                    </div>

                                    <div className="icon-cont">
                                        <h4>Easy Data Migration</h4>
                                        <p>Migrate your email from your existing suite easily with custom tools that help preserve your important messages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="full-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full-contact-page">
                                    <div role="form" className="g-s-form" id="wpcf7-f2103-p2096-o2">
                                        <form action="#" method="post" className="g-suite-c-form" novalidate="novalidate">

                                            <div className="row">
                                                <h5>Get GSuite for Your Company</h5>
                                                <div className="col-md-6">
                                                    <div className="firstName textFieldInput">
                                                        <label className="placeholder"><br />
                                                            <input type="text" name="your-first-name" className="g-suite-company-form" placeholder="First name" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="firstName textFieldInput">
                                                        <label className="placeholder"><br />
                                                            <input type="text" name="your-last-name" className="g-suite-company-form" placeholder="Last name" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className="firstName textFieldInput">
                                                        <label className="placeholder"><br />
                                                            <input type="email" name="your-email" className="g-suite-company-form" placeholder="Work Email" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="firstName textFieldInput">
                                                        <label className="placeholder"><br />
                                                            <input type="tel" name="your-phone" className="g-suite-company-form" placeholder="Phone" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="main-f">
                                                        <input type="submit" value="Send" className="g-suite-company-form-sumit-btn" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const GsuitePage = ({ data }) => {

    return (
        <>
            <Layout />
            <Gsuite />
            <Footer items={data.allContentfulFooter} />
        </>
    );

}
export default GsuitePage
export const query = graphql`
{
    allContentfulFooter(sort: {fields: updatedAt, order: ASC}) {
        edges {
          node {
            id
            title
            footerContent {
              json
            }
          }
        }
      }
}`;
