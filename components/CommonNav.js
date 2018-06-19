import React, { Component, Fragment } from 'react'
import LoginModal from './LoginModals/candidate'
import { Query, withApollo } from 'react-apollo'
import cookie from 'cookie'
import redirect from '../lib/auth/redirect'

import { CANDIDATE_ISAUTHENTICATED_QUERY } from '../lib/backendApi/queries'

class CommonNav extends Component{
    constructor(props){
        super(props);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.signout = this.signout.bind(this);

        this.state = {
          open: false
        }
    }

    componentDidMount(){
      const {showSignIn} = this.props
      if (showSignIn)
        this.setState({open: true});
    }

    signout = () => {
      document.cookie = cookie.serialize('token', '', {
        maxAge: -1 // Expire the cookie immediately
      })

      // Force a reload of all the current queries now that the user is
      // logged in, so we don't accidentally leave any state around.
      this.props.client.cache.reset().then(() => {
        // Redirect to a more useful page when signed out
        redirect({}, '/')
      })
    }

    handleModalOpen = () => {
      this.setState({open: true});
    };

    handleModalClose = () => {
      this.setState({open: false});
    };

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
                                  <Query query={CANDIDATE_ISAUTHENTICATED_QUERY}>
                                    {({loading, error, data}) => {
                                      if (loading)
                                        return "Loading...";
                                      if (error) {
                                        console.log(error);
                                        return `XXX`;
                                      }

                                      const { candidateIsAuthenticated } = data;
                                      return <Fragment>
                                        { candidateIsAuthenticated ?
                                          <a href="#!" onClick={this.signout} style={{fontWeight : '500', color : 'white', margin : '10px'}}>LOGOUT</a>
                                          :
                                          <Fragment>
                                            <LoginModal isOpen = {this.state.open} close={this.handleModalClose} />
                                            <a href="#!"  onClick={this.handleModalOpen} style={{fontWeight : '500', color : 'white', margin : '10px'}}>LOGIN</a>
                                          </Fragment>
                                      }</Fragment>
                                    }}
                                  </Query>
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

export default withApollo(CommonNav)
