import React, { Component } from "react";
import Arrow from "../../images/arrow_long_right.svg"
import Title from "../Globals/Title";
import { Link } from "gatsby"


export default class Strategy extends Component {
    render() {
        return (
            <section className="strategy">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="strategy-area">
                                <h1>Strategy & Execution</h1>
                                <p>
                                    We are relentlessly customer-centric, for both you – our customers,
                                    and for your customers. So every professional service we provide has
                                    a ton of R&D and years of experience behind it.From web UIs to
                                    complex ERP systems, we are capable of providing what your business
                                    needs.
              </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="strategy-list">
                                <h4>Design.</h4>
                                <ul>
                                    <li>
                                        <a href="/logo">Logo</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Corporate identity</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Branding strategy</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Brochure & flyers</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Email newsletters</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="strategy-list">
                                <h4>Development.</h4>
                                <ul>
                                    <li>
                                        <a href="/logo">Website</a>
                                    </li>
                                    <li>
                                        <a href="/logo">E-commerce</a>
                                    </li>
                                    <li>
                                        <a href="/logo">CMS</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Mobile appss</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Email newsletters</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="strategy-list">
                                <h4>Enterprise.</h4>
                                <ul>
                                    <li>
                                        <a href="/logo">CRM</a>
                                    </li>
                                    <li>
                                        <a href="/logo">ERP</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Cloud hosting</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Domain management</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Enterprise email</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="strategy-list">
                                <h4>Marketing.</h4>
                                <ul>
                                    <li>
                                        <a href="/logo">SEO</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Social media</a>
                                    </li>
                                    <li>
                                        <a href="/logo">ORM</a>
                                    </li>
                                    <li>
                                        <a href="/logo">Email marketing</a>
                                    </li>
                                    <li>
                                        <a href="/logo">PPC advertising</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="strategy-list">
                                <h4>View our Work.</h4>
                                <a href="/work">
                                    <img src={Arrow} alt="Arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}