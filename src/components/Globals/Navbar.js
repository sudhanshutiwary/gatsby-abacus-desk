import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import logo2 from "../../images/abacus-full.png"
import Icon from "../../images/menu-icon.png"

import $ from 'jquery';

export default class Navbar extends Component {

  componentDidMount() {
    $(".navbar-nav.header-menu>li>a").each(function () {
      if ($(this).parent().children("ul.subMenu").length) {
        $(this).addClass("expandable");

      }
    });
    $(document).ready(function () {
      $('ul.navbar-nav.header-menu li a.expandable').click(function (e) {

        $('li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');

        e.preventDefault();
        $('.top').addClass('selected');
        $('.logo').find('img').attr('src', `${logo2}`);
      });
      $(".cross-item").click(function () {
        $("li").removeClass("active");
        $('.top').removeClass('selected');
        $('.logo').find('img').attr('src', `${logo}`);
      });
    });
  }



  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "#",
        text: "Capabilities",
        subMenu: [
          {
            text: `Design.`,
            subSubMenu: [
              {
                text: `Logo`,
                path: `/logo/`,
              },
              {
                text: `Corporate Identity`,
                path: `/corporate-identity/`,
              },
              {
                text: `Branding Strategy`,
                path: `/branding-strategy/`,
              },
              {
                text: `Brochure & Flyers`,
                path: `/brochure-flyers/`,
              },
              {
                text: `Email Newsletters`,
                path: `/email-newsletters/`,
              },
            ],
          },
          {
            text: `Development.`,
            subSubMenu: [
              {
                text: `Website`,
                path: `/website/`,
              },
              {
                text: `E-commerce`,
                path: `/e-commerce/`,
              },
              {
                text: `CMS`,
                path: `/cms/`,
              },
              {
                text: `Mobile apps`,
                path: `/mobile-apps/`,
              },
            ],
          },
          {
            text: `Enterprise.`,
            subSubMenu: [
              {
                text: `CRM`,
                path: `/CRM`,
              },
              {
                text: `ERP`,
                path: `/erp/`,
              },
              {
                text: `Cloud Hosting`,
                path: `/cloud-hosting/`,
              },
              {
                text: `Domain management`,
                path: `/domain-management/`,
              },
              {
                text: `Enterprise email`,
                path: `/enterprise-email/`,
              },
              {
                text: `G Suite`,
                path: `/G Suite`,
              },
            ],
          },
          {
            text: `Marketing.`,
            subSubMenu: [
              {
                text: `SEO`,
                path: `/seo/`,
              },
              {
                text: `Social media`,
                path: `/social-media/`,
              },
              {
                text: `ORM`,
                path: `/orm/`,
              },
              {
                text: `Email marketing`,
                path: `/email-marketing/`,
              },
              {
                text: `PPC advertising`,
                path: `/ppc-advertising/`,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        path: "#",
        text: "about",
        subMenu: [
          {
            text: `Profile.`,
            subSubMenu: [
              {
                paragraph: `Our truly unique products and customer-centric approach can help your company remain ahead in the IT race.`,
                icon: `${Icon}`,
                iconLink: `/company-profile/`,
                iconClass: `icon-border`
              },
            ],
          },
          {
            text: `Why Us.`,
            subSubMenu: [
              {
                paragraph: `We strive to create a strategic and data-driven advantage for your organization.`,
                icon: `${Icon}`,
                iconLink: `/Why-Us/`,
                iconClass: `icon-border`
              },
            ],
          },
          {
            text: `Clients.`,
            subSubMenu: [
              {
                paragraph: `We have over 1000 companies across the globe as our clients.`,
                icon: `${Icon}`,
                iconLink: `/logo/`,
                iconClass: `icon-border`
              },
            ],
          },
          {
            text: `About Us.`,
            subSubMenu: [
              {
                text: `Case Studies`,
                path: `/Case Studies`,
              },
              {
                text: `Testimonials`,
                path: `/Testimonials`,
              },
              {
                text: `Infrastructure`,
                path: `/infrastructure/`,
              },
              {
                text: `Associates`,
                path: `/associates/`,
              },
              {
                text: `Abacus Experiments`,
                path: `/abacus-experiments/`,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        path: "/support",
        text: "Support",
        subMenu: [
          {
            text: `Offices.`,
            subSubMenu: [
              {
                paragraph: `For queries related to our digital services, contact us at any of our global offices.`,
              },
            ],
          },
          {
            text: `Submit RFP.`,
            subSubMenu: [
              {
                paragraph: `Thank you for your interest in Abacus digital services. Please fill the RFP form here.`,
              },
            ],
          },
          {
            text: `Quick contact.`,
            subSubMenu: [
              {
                text: `info@abacusdesk.co.in`,
                path: `mailto:info@abacusdesk.co.in`,
              },
              {
                text: `+91 935 005 9390`,
                path: `tel:+91 935 005 9390`,
              },
              {
                text: `+91 999 985 2209`,
                path: `tel:+91 999 985 2209`,
              },
              {
                text: `+91 129 402 1258`,
                path: `tel:+91 129 402 1258`,
              },
            ],
          },

          {
            text: `Support.`,
            subSubMenu: [
              {
                text: `Help Desk`,
                path: `#`,
              },
              {
                text: `Email Client Setup`,
                path: `/email-client-setup/`,
              },
              {
                text: `Web design tips`,
                path: `Web design tips`,
              },
              {
                text: `Responsive Site Help`,
                path: `/responsive-site-help/`,
              },
              {
                text: `CPANEL HELP`,
                path: `/cpanel-help/`,
              },
              {
                text: `Terms & Conditions`,
                path: `/terms-conditions/`,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        path: "/work",
        text: "Work",
      },
      {
        id: 5,
        path: "/insight/",
        text: "Insights",
      },
      {
        id: 6,
        path: "/career",
        text: "Career",
      },
      {
        id: 7,
        path: "/contact-us/",
        text: "Contact",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show",
      })
  }

  render() {
    return (
      <>
        {/* <nav className="navbar navbar-expand-sm bg-ligh navbar-light">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" /> */}
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                            Creative Commons (Attribution 3.0 Unported);
                            https://www.iconfinder.com/webalys */}
        {/* </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        {/* <div className={this.state.css}>
            <ul className="navbar-nav header-menu">
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div> */}
        {/* </nav> */}
        <nav className="navbar navbar-expand-sm bg-ligh navbar-light">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                            Creative Commons (Attribution 3.0 Unported);
                            https://www.iconfinder.com/webalys */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.css}>
            <ul className="navbar-nav header-menu main-menu">
              {this.state.links.map(link => (
                <li key={link.text} className="nav-item nav-item-main">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>

                  {/*Sub menu  */}
                  {link.subMenu && link.subMenu.length > 0 ? (
                    <ul className="subMenu">
                      <div className="megamenu-sub-mainmenu">
                        <div className="row">
                          {link.subMenu.map(subLink => (

                            <div className="col-md-3">
                              <div className="content-menu">
                                <li key={subLink.text}>
                                  <Link to={subLink.path}>{subLink.text}</Link>

                                  {/* Sub Sub Menu */}
                                  {subLink.subSubMenu &&
                                    subLink.subSubMenu.length > 0 ? (
                                      <ul className="subsubMenu">
                                        {subLink.subSubMenu.map(subSubLink => (
                                          <li key={subSubLink.text}>
                                            <Link to={subSubLink.path}>
                                              {subSubLink.text}
                                            </Link>
                                            <p>{subSubLink.paragraph}</p>
                                            <div class={subSubLink.iconClass}>
                                              <div className="sign-more">
                                                <Link to={subSubLink.iconLink}>
                                                  <img src={subSubLink.icon} />
                                                </Link>
                                              </div>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    ) : null}
                                </li>
                              </div>
                            </div>
                          ))}

                          <div class="cross-item">
                            <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
                          </div>
                        </div>
                      </div>
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
