import React, { Component } from 'react'
import { Link } from "gatsby"
import logo from '../../images/logo.png'


export default class Navbar extends
Component {
    state ={
        navbarOpen:false,
        css:'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/capabilities',
                text:'Capabilities'
            },
            {
                id:2,
                path:'/about',
                text:'about'
            },
            {
                id:3,
                path:'/support',
                text:'Support'
            },
            {
                id:4,
                path:'/work',
                text:'Work'
            },
            {
                id:5,
                path:'/insights',
                text:'Insights'
            },
            {
                id:6,
                path:'/career',
                text:'Career'
            },
            {
                id:7,
                path:'/contact',
                text:'Contact'
            }
        ]
    }
        navbarHandler = () =>{
            this.state.navbarOpen?this.setState({navbarOpen:false, css:"collapse navbar-collapse"}):this.setState({
                navbarOpen:true,
                css:"collapse navbar-collapse show"
            });
        };
    
    render(){
        return(
                    <nav className="navbar navbar-expand-sm bg-ligh navbar-light">
                    <Link to="/" className="logo">
                            <img src={logo} alt="logo" />
                            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                            Creative Commons (Attribution 3.0 Unported);
                            https://www.iconfinder.com/webalys */}
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                                <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={this.state.css}>
                            <ul className="navbar-nav mx-auto">
                                {
                                    this.state.links.map(link =>{
                                        return(
                                            <li key={link.id} className="nav-item">
                                                <Link to={link.path} className="nav-link text-capitalize">
                                                    {link.text}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
        );
    }
}