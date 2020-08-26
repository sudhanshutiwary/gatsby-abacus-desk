import React from 'react'
import footer from '../../images/footer.jpg'


export default function Footer() {
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
                                    <li>
                                        <a href="/page-2">Company Profile</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Why Us?</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Clients</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Case Studies</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Infrastructure</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Associates</a>
                                    </li>
                                    <li>
                                        <a href="/page-2">Experiments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="foot-menu-area">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <a href="/page-2">Corporate Identity</a>
                                </li>
                                <li>
                                    <a href="/page-2">Branding Strategy</a>
                                </li>
                                <li>
                                    <a href="/page-2">Website & App Design</a>
                                </li>
                                <li>
                                    <a href="/page-2">BasiqERP</a>
                                </li>
                                <li>
                                    <a href="/page-2">BasiqCRM</a>
                                </li>
                                <li>
                                    <a href="/page-2">SEO</a>
                                </li>
                                <li>
                                    <a href="/page-2">Social Media</a>
                                </li>
                                <li>
                                    <a href="/page-2">Enterprise Email</a>
                                </li>
                                <li>
                                    <a href="/page-2">Cloud Servers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="foot-menu-area">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <a href="/page-2">Help Desk</a>
                                </li>
                                <li>
                                    <a href="/page-2">Setting Up Email</a>
                                </li>
                                <li>
                                    <a href="/page-2">Web Design Tips</a>
                                </li>
                                <li>
                                    <a href="/page-2">Responsive Tips</a>
                                </li>
                                <li>
                                    <a href="/page-2">cPanel Help</a>
                                </li>
                                <li>
                                    <a href="/page-2">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/page-2">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="foot-menu-area">
                            <h4>Social</h4>
                            <ul>
                                <li>
                                    <a href="/page-2">Facebook</a>
                                </li>
                                <li>
                                    <a href="/page-2">Twitter</a>
                                </li>
                                <li>
                                    <a href="/page-2">Instagram</a>
                                </li>
                                <li>
                                    <a href="/page-2">YouTube</a>
                                </li>
                                <li>
                                    <a href="/page-2">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}
