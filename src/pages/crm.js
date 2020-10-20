import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import "../../style/crm.css"


class Crm extends Component {
    render() {

        return (
            <>
                <section className="main-slider inner-banner crm-banner">
                    <article
                        className="slider-banner"
                        style={{
                            backgroundImage: `url(https://abacusdesk.com/wp-content/uploads/2018/07/CRM-1440.jpg)`,
                            height: `670px`,
                            backgroundSize: `cover`,
                            display: `flex`,
                            alignItems: `center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center center`,
                        }}
                    >
                    </article>
                    <article className="internalmain-contant">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner-menu-contant">
                                        <h1>CRM</h1>
                                    </div>
                                    <div className="set-breadc">
                                        <div className="innerbanner-breadcrumb">
                                            <p><Link to="/">Home</Link> - <span>CRM</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="contant-part inner-pages">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-10 crm-width">
                                <div className="content-inner">
                                    <div className="row">
                                        <div className="container">
                                            <div className="slider"> </div>
                                            <div className="circle">
                                                <div className="icons">
                                                    <a href="#" className="icon icon-1">
                                                        <img className="scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Handshake_2645897@3x.png" alt="Dealers" title="Forced to wrong size: 40x27, natural is 267x183!" />
                                                        <br />
                                                        <span className="icon-text">Dealers</span>
                                                        <br />
                                                        <span className="tooltip-1 ">Manage your dealer and distributor network with custom modules like discounts, documents, orders, POP, &amp; gifts.</span>
                                                    </a>
                                                    <a href="#" className="icon icon-2">
                                                        <img className="scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_warehouse_2631051@3x.png" alt="Warehouse Inventory" title="Forced to wrong size: 40x36, natural is 198x180!" />
                                                        <br />
                                                        <span className="icon-text">Inventory</span>
                                                        <br />
                                                        <span className="tooltip-2 ">Manage inventory with a complete oversight into all inbound &amp; outbound freight, helping you make better decisions. </span>
                                                    </a>
                                                    <a href="#" className="icon icon-3">
                                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Graph_175055@3x.png" alt="Sales Graph" className="scaled-image" title="Forced to wrong size: 40x39, natural is 99x96!" />
                                                        <br />
                                                        <span className="icon-text">Sales</span>
                                                        <span className="tooltip-3 ">Eliminate inefficient manual bottlenecks and streamline sales processes with cloud-based CRM and smartphone apps.</span>
                                                        <br />
                                                    </a>
                                                    <a href="#" className="icon icon-4">
                                                        <img className="inventory scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_person_542102@3x.png" alt="Employees" title="Forced to wrong size: 40x45, natural is 105x117!" />
                                                        <span className="icon-text">Employees</span>
                                                        <span className="tooltip-4 ">Increase worker productivity and manage your entire employee base efficiently with geo-location based time tracking. </span>
                                                    </a>
                                                    <a href="#" className=" icon-5">
                                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/07/2019-06-24@3x.png" alt="CRM" className="scaled-image" title="Forced to wrong size: 300x323, natural is 891x960!" />
                                                        <span className="center-text">CRM</span>
                                                    </a>
                                                    <a href="#" className="icon icon-6">
                                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Procurement_1662499@3x.png" alt="Procurment" className="scaled-image" title="Forced to wrong size: 40x32, natural is 120x96!" />
                                                        <span className="icon-text">Procurment</span>
                                                        <span className="tooltip-6 ">Sourcing and procurement using automation with powerful modules like purchase orders, payments, and invoicing.</span>
                                                    </a>
                                                    <a href="#" className="icon icon-7">
                                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Factory_275530@3x.png" alt="Production Factory" className="scaled-image" title="Forced to wrong size: 40x48, natural is 93x111!" />
                                                        <span className="icon-text">Production</span>
                                                        <span className="tooltip-7 ">Manage manufacturing processes for small to medium-sized factories in almost any industry with production modules.</span>
                                                    </a>
                                                    <a href="#" className="icon icon-8">
                                                        <img className="sales scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Star_426789@3x.png" alt="Loyality Star" title="Forced to wrong size: 40x34, natural is 120x102!" />
                                                        <span className="icon-text"> Loyalty</span>
                                                        <span className="tooltip-8 ">Provide Paytm redeemable loyalty points for your sales team members aligned with business objectives and results.</span>
                                                    </a>
                                                    <br />
                                                    <a href="#" className="icon icon-9">
                                                        <img src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Truck_2640350@3x.png" alt="Logistics Truck" className="scaled-image" title="Forced to wrong size: 40x32, natural is 129x102!" />
                                                        <span className="icon-text">Logistics</span>
                                                        <span className="tooltip-9 ">Manage the transportation of material and products with integrated logistics modules like fleet/dispatch management.</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p><!--main body section--></p> */}
                                    <div className="main-body">
                                        <div className=" text-center">
                                            <div className="box-content">
                                                <h1 className="main-header">
                                                    Industry wise CRM and automation solution
                                                    <br />
                                                </h1>

                                                <div className="row">
                                                    <div className="card col-md-4 ">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_basin_2260080@3x.png" alt="sanitary &amp; Hardware basin" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Sanitary &amp; hardware</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Wood_797018@3x.png" alt="Plywood &amp; Laminates wood" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Plywood &amp; Laminates</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Doctor_850127@3x.png" alt="Healthcare &amp; Hospital Dcotors" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Healthcare &amp; Hospital</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Car_1893064@3x.png" alt="OEM &amp; Automation car" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">OEM &amp; Automotive</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/Group-4@3x.png" alt="FMCG &amp; B2C Brand" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">FMCG &amp; B2C Brand</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_teddy_2566161@3x.png" alt="Toys Manufacturing Teddy" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Toys Manufacturing</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h1 className="main-header">
                                                    Customer CRM &amp; automation apps develepement<br />
                                                </h1>
                                                <div className="row">
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Handshake_2645897@3x.png" alt="Dealer Management Handshake" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Dealer Management System</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Laptop_2629948@3x.png" alt="Sales Force Automation Laptop" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Sales Force Automation</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_Star_426789.png" alt="Loyality Star" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Loyalty Points</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_warehouse_2631051@3x.png" alt="Inventory Management Warehouse" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Inventory Management</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_qr_1635711@3x.png" alt="QR Based Processes" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">QR Based Processes</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="card col-md-4">
                                                        <img className="card-img scaled-image" src="https://abacusdesk.com/wp-content/uploads/2019/07/noun_dashboard_1561487@3x.png" alt="Customized CRM &amp; ERP" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Customized CRM &amp; ERP</h4>
                                                            <a href="#" className="btn">Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="only-in-pages">
                    <article className="dav-powders">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-page-client">
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div className="extra-content">
                                        <p>“With AWS a new server can be up and running in three minutes (it used to <br />take Eli Lilly seven and a half weeks to deploy a server internally) and a 64-node <br />Linux cluster can be online in five minutes (compared with three months<br /> internally)…The deployment time is really what impressed us.”</p>

                                        <h4>Dave Powers, Associate Information Consultant, Eli Lilly and <br />Company.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

            </>
        )
    }
}

const CrmPage = ({ data }) => {

    return (
        <section className="crm-page">
            <Layout />
            <Crm />
            <Footer items={data.allContentfulFooter} />
        </section>
    );

}
export default CrmPage
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
