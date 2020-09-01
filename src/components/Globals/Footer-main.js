import React, { Component } from "react";
import footer from '../../images/footer.jpg'
import { Link } from "gatsby"



export default class FooterMain extends Component {

    render() {
        return (
            <footer style={{ backgroundImage: `url(${footer})` }}>
                <article className="heading-area-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div className="menu-contant text-center">
                                    <h2>How can we help?</h2>
                                    <div className="contant-btn">
                                        <a href="https://abacusdesk.com/offices/">Let's talk <i class="fa fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="information-menus">
                                <div className="foot-menu-area">
                                    <h4>About Us</h4>
                                    <ul>
                                        <li><Link to="/">Company Profile</Link></li>
                                        <li><Link to="/">Why Us?</Link></li>
                                        <li><Link to="/">Clients</Link></li>
                                        <li><Link to="/">Case Studies</Link></li>
                                        <li><Link to="/">Testimonials</Link></li>
                                        <li><Link to="/">Infrastructure</Link></li>
                                        <li><Link to="/">Associates</Link></li>
                                        <li><Link to="/">Experiments</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="information-menus">
                                <div className="foot-menu-area">
                                    <h4>Services</h4>
                                    <ul>
                                        <li><Link to="/">Corporate Identity</Link></li>
                                        <li><Link to="/">Branding Strategy</Link></li>
                                        <li><Link to="/">Website & App Design</Link></li>
                                        <li><Link to="/">BasiqERP</Link></li>
                                        <li><Link to="/">BasiqCRM</Link></li>
                                        <li><Link to="/">SEO</Link></li>
                                        <li><Link to="/">Social Media</Link></li>
                                        <li><Link to="/">Enterprise Email</Link></li>
                                        <li><Link to="/">Cloud Servers</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="information-menus">
                                <div className="foot-menu-area">
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to="/">Help Desk</Link></li>
                                        <li><Link to="/">Setting Up Email</Link></li>
                                        <li><Link to="/">Web Design Tips</Link></li>
                                        <li><Link to="/">Responsive Tips</Link></li>
                                        <li><Link to="/">cPanel Help</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="information-menus">
                                <div className="foot-menu-area">
                                    <h4>Social</h4>
                                    <ul>
                                        <li><Link to="/">Facebook</Link></li>
                                        <li><Link to="/">Twitter</Link></li>
                                        <li><Link to="/">Instagram</Link></li>
                                        <li><Link to="/">YouTube</Link></li>
                                        <li><Link to="/">LinkedIn</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}
