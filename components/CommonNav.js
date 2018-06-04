import React, { Component, Fragment } from 'react'
import LoginModal from './LoginModals/candidate'

export default class extends Component{
    constructor(props){
        super(props);
    }

    triggerModal(){
        this.copen.handleOpen() ;
    }
    render(){
        return <Fragment>
        <div className="container ">
            <nav className="navbar navbar-default">
                <div className="navbar-header navbar-left">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="wthree_logo">
                        <a className="navbar-brand" href=""><img src="/static/images/mcclogo.gif" style={{maxWidth: '140px', margin : '-10px 30px'}} className="img-responsive" alt=""/></a>
                    </div>
                </div>
                <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <nav>
                        <ul className="nav navbar-nav link-effect-5" id="link-effect-5">
                            <li className={this.props.homepage && "active"}>
                                <a href="index" data-hover="Home">Home</a>
                            </li>
                            <li className={this.props.aboutpage && "active"}>
                                <a href="about" data-hover="About">About</a>
                            </li >
                            <li className={this.props.studentpage && "active"}>
                                <a href="student" data-hover="Student">Student</a>
                            </li>
                            <li className={this.props.institutionpage && "active"}>
                                <a href="institution" data-hover="Institution">Institution</a>
                            </li>
                            <li className={this.props.pricingpage && "active"}>
                                <a href="pricing" data-hover="Pricing">Pricing</a>
                            </li>
                            <li className={this.props.contactpage && "active"}>
                                <a href="contact" data-hover="Contact">Contact</a>
                            </li>
                        </ul>
                        <div className="w3_social_icons">
                            <ul className="w3layouts_social">
                                <li>
                                    <LoginModal ref={open => this.copen = open} />
                                    <a href="#!"  onClick={this.triggerModal.bind(this)} style={{fontWeight : '500', color : 'white', margin : '10px'}}>LOGIN</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/career.choice.5" target="_blank" className="w3l_facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/mycareerchoice1" target="_blank" className="w3l_twitter">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mycareerchoice5/" target="_blank" className="w3l_instagram">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    </Fragment>
    }
}