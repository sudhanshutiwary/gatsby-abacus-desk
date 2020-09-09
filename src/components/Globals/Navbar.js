import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import logo2 from "../../images/abacus-full.png"
import Icon from "../../images/menu-icon.png"
import { FaSearch } from "react-icons/fa";



import $ from 'jquery';
import jQuery from 'jquery';

export default class Navbar extends Component {

  componentDidMount() {

    (function ($) {
      $(document).ready(function () {
        $('li.mobile-item-main>a').on('click', function (event) {
          $(this).parent().toggleClass('menu-open');

        });
        $('ul.mobile-subMenu>li>a.dropdown-btn').on('click', function (event) {
          $(this).parent().toggleClass('submenu-open');

        });

      });
    })(jQuery);

    $(".search").click(function () {
      $(".open-search").addClass("active");
    });
    $(".open-search>.close-search").click(function () {
      $(".open-search").removeClass("active");
    });


    $(".navbar-nav.header-menu>li>a").each(function () {
      if ($(this).parent().children("ul.subMenu").length) {
        $(this).addClass("expandable");

      }
    });
    // for mobile view
    $("ul.mobile-main-menu>li.mobile-item-main>a").each(function () {
      if ($(this).parent().children("ul.mobile-subMenu").length) {
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
                path: `/testimonials/`,
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
        path: "#",
        text: "Support",
        subMenu: [
          {
            text: `Offices.`,
            subSubMenu: [
              {
                paragraph: `For queries related to our digital services, contact us at any of our global offices.`,
                icon: `${Icon}`,
                iconLink: `/offices/`,
                iconClass: `icon-border`
              },
            ],
          },
          {
            text: `Submit RFP.`,
            subSubMenu: [
              {
                paragraph: `Thank you for your interest in Abacus digital services. Please fill the RFP form here.`,
                icon: `${Icon}`,
                iconLink: `/submit-rfp/`,
                iconClass: `icon-border`
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
                path: `/web-design-tips/`,
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
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse", cssbtn: "menu-toggle-btn" })
      : this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show",
        cssbtn: "menu-toggle-btn active",
      })
  }

  render() {
    return (
      <>

        <nav className="navbar navbar-expand-sm bg-ligh navbar-light">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                            Creative Commons (Attribution 3.0 Unported);
                            https://www.iconfinder.com/webalys */}
          </Link>
          <button
            className={"navbar-toggler " + this.state.cssbtn}
            type="button"
            onClick={this.navbarHandler}
          >
          </button>

          {/* mebile menu */}
          <div className={"mobile-menu " + this.state.css}>
            <ul className="mobile-main-menu">
              {this.state.links.map(link => (
                <li key={link.text} className="mobile-item-main">
                  <Link to={link.path} className="mobile-nav-link text-capitalize">
                    {link.text}
                  </Link>

                  {/*Sub menu  */}
                  {link.subMenu && link.subMenu.length > 0 ? (
                    <ul className="mobile-subMenu">
                      {link.subMenu.map(subLink => (
                        <li key={subLink.text}>
                          <Link to={subLink.path} className="dropdown-btn">{subLink.text}</Link>

                          {/* Sub Sub Menu */}
                          {subLink.subSubMenu &&
                            subLink.subSubMenu.length > 0 ? (
                              <ul className="mob-subsubMenu">
                                {subLink.subSubMenu.map(subSubLink => (
                                  <li key={subSubLink.text}>
                                    <Link to={subSubLink.path}>
                                      {subSubLink.text}
                                    </Link>

                                  </li>
                                ))}
                              </ul>
                            ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          {/* mebile menu end */}
          {/* desktop menu */}
          <div className={"desktop-menu " + this.state.css}>
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
                                                  <img src={subSubLink.icon} alt="icon" />
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
                            <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" alt="cross" />
                          </div>
                        </div>
                      </div>
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="search-icon search">
              <FaSearch />
            </div>
            <div className="open-search">
              <div className="close-search">
                <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
              </div>
              <div className="search-here">
                <div className="input-here">
                  <input class="search-field" placeholder="Search …" type="text" />
                  <button type="submit" class="search-submit">
                    <span class="screen-reader-text">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
