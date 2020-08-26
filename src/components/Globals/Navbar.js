import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import logo2 from "../../images/abacus-full.png"
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
                path: `/logo`,
              },
              {
                text: `Corporate Identity`,
                path: `/corporate-identity`,
              },
              {
                text: `Branding Strategy`,
                path: `/branding-strategy`,
              },
              {
                text: `Brochure & Flyers`,
                path: `/branding-strategy`,
              },
              {
                text: `Email Newsletters`,
                path: `/branding-strategy`,
              },
            ],
          },
          {
            text: `Development.`,
            subSubMenu: [
              {
                text: `Website`,
                path: `/website`,
              },
              {
                text: `E-commerce`,
                path: `/E-commerce`,
              },
              {
                text: `CMS`,
                path: `/CMS`,
              },
              {
                text: `Mobile apps`,
                path: `/Mobile apps`,
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
                path: `/ERP`,
              },
              {
                text: `Cloud Hosting`,
                path: `/Cloud Hosting`,
              },
              {
                text: `Domain management`,
                path: `/Domain management`,
              },
              {
                text: `Enterprise email`,
                path: `/Enterprise email`,
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
                path: `/SEO`,
              },
              {
                text: `Social media`,
                path: `/Social media`,
              },
              {
                text: `ORM`,
                path: `/ORM`,
              },
              {
                text: `Email marketing`,
                path: `/Email marketing`,
              },
              {
                text: `PPC advertising`,
                path: `/PPC advertising`,
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
              },
            ],
          },
          {
            text: `Why Us.`,
            subSubMenu: [
              {
                paragraph: `We strive to create a strategic and data-driven advantage for your organization.`,
              },
            ],
          },
          {
            text: `Clients.`,
            subSubMenu: [
              {
                paragraph: `We have over 1000 companies across the globe as our clients.`,
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
                path: `/Infrastructure`,
              },
              {
                text: `Associates`,
                path: `/Associates`,
              },
              {
                text: `Abacus Experiments`,
                path: `/Abacus Experiments`,
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
                path: `Help Desk`,
              },
              {
                text: `Email Client Setup`,
                path: `Email Client Setup`,
              },
              {
                text: `Web design tips`,
                path: `Web design tips`,
              },
              {
                text: `Responsive Site Help`,
                path: `Responsive Site Help`,
              },
              {
                text: `CPANEL HELP`,
                path: `CPANEL HELP`,
              },
              {
                text: `Terms & Conditions`,
                path: `Terms & Conditions`,
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
        path: "/insights",
        text: "Insights",
      },
      {
        id: 6,
        path: "/career",
        text: "Career",
      },
      {
        id: 7,
        path: "/contact",
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
