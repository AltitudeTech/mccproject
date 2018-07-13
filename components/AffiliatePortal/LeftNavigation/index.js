import React, {Component, Fragment} from 'react';
import Head from 'next/head'
import Link from 'next/link'

import { ApolloConsumer } from 'react-apollo'
import cookie from 'cookie'
import redirect from '../../../lib/auth/redirect'

import NotificationsList from '../../CandidatePortal/NotificationsList'

import { AffiliateDetailsContext } from '../../Context/AffiliateDetailsContext'

export default class LeftNavigation extends Component{
  constructor(props){
    super(props)
    this.setActive = this.setActive.bind(this)
  }

  setActive = (e) => {
    console.log(e.target.className)
  }

    render(){
        return<div>
          {/* <Head>
            <script src="/static/css/react-dropdown/react-buttons.css"></script>
            <script src="/static/css/react-dropdown/react-dropdown.css"></script>
          </Head> */}
        <div className="profile-sidebar">
            <div className="profile-usertitle">
                <img src="/static/images/mcclogo-circle.png" width="100px"/>
                <style jsx>{`
                  img {
                    border-radius: 50%;
                    height: 100px;
                    border: 4px solid #136458;
                    background-color: #f1f3fa;
                  }
                `}</style>
                <AffiliateDetailsContext.Consumer>{
                  ({ affiliate: { name } }) => <Fragment>
                    <div className="profile-usertitle-name">
                      {name}
                    </div>
                  </Fragment>
                }</AffiliateDetailsContext.Consumer>
                <div className="profile-usertitle-job">
                    Affiliate
                </div>
            </div>

            <div className="profile-userbuttons">
                {/* <button type="button" className="btn btn-danger btn-sm">Message</button> */}
                <NotificationsList />
            </div>

            <div className="profile-usermenu">
                <ul className="nav">
                    <li className={this.props.activePage=='/' ? "active" : ""} >
                      <Link prefetch href="/affiliate/dashboard">
                        <a>
                        <i className="glyphicon glyphicon-home"></i>
                        Home </a>
                      </Link>
                    </li>
                    <li className={this.props.activePage=='/customers' ? "active" : ""}>
                      <Link prefetch href="/affiliate/customers">
                      <a>
                        <i className="glyphicon glyphicon-user"></i>
                        Customers </a>
                      </Link>
                    </li>
                    <li className={this.props.activePage=='/profile' ? "active" : ""}>
                        <Link prefetch href="/affiliate/profile">
                        <a>
                        <i className="glyphicon glyphicon-user"></i>
                        Profile  </a>
                        </Link>
                    </li>
                    <li>
                      <a href="/" target="_blank">
                        <i className="glyphicon glyphicon-ok"></i>Link To Website
                      </a>
                    </li>
                    <li>
                      <ApolloConsumer>{
                        client => <a href="#!" onClick={(e)=>{
                          e.preventDefault();
                          e.stopPropagation();
                          document.cookie = cookie.serialize('token', '', {
                            maxAge: -1, // Expire the cookie immediately
                            path: '/'
                          })
                          document.cookie = cookie.serialize('userType', '', {
                            maxAge: -1, // Expire the cookie immediately
                            path: '/'
                          })

                          // Force a reload of all the current queries now that the user is
                          // logged in, so we don't accidentally leave any state around.
                          client.cache.reset().then(() => {
                            // Redirect to a more useful page when signed out
                            redirect({}, '/')
                          })
                        }}>
                        <i className="glyphicon glyphicon-log-out"></i>
                        Logout </a>
                      }</ApolloConsumer>
                    </li>
                </ul>
            </div>

        </div>

        </div>
    }
}
