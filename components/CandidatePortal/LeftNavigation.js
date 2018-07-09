import React, {Component, Fragment} from 'react';
import Head from 'next/head'
import Link from 'next/link'

import { ApolloConsumer } from 'react-apollo'
import cookie from 'cookie'
import redirect from '../../lib/auth/redirect'

import NotificationsList from '../CandidatePortal/NotificationsList'

import { CandidateDetailsContext } from '../Context/CandidateDetailsContext'

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
                <CandidateDetailsContext.Consumer>{
                  ({ candidate: { name } }) => <Fragment>
                    <div className="profile-usertitle-name">
                      {name}
                    </div>
                  </Fragment>
                }</CandidateDetailsContext.Consumer>
                <div className="profile-usertitle-job">
                    Candidate
                </div>
            </div>

            <div className="profile-userbuttons">
                {/* <button type="button" className="btn btn-danger btn-sm">Message</button> */}
                <NotificationsList />
            </div>

            <div className="profile-usermenu">
                <ul className="nav">
                    <li className={this.props.activePage=='/' ? "active" : ""} >
                      <Link prefetch href="/user/dashboard">
                        <a>
                        <i className="glyphicon glyphicon-home"></i>
                        Home </a>
                      </Link>
                    </li>
                    <li className={this.props.activePage=='/payment' ? "active" : ""}>
                        <Link prefetch href="/user/payment">
                        <a>
                        <i className="glyphicon glyphicon-user"></i>
                        Make Payment  </a>
                        </Link>

                    </li>
                    <li className={this.props.activePage=='/test' ? "active" : ""}>
                        <Link prefetch href="/user/mcc-test-code">
                        <a>
                        <i className="glyphicon glyphicon-edit"></i>
                        MCC Test Code </a>
                        </Link>
                    </li>
                    <li className={this.props.activePage=='/career-coach' ? "active" : ""}>
                        <Link prefetch href="/user/career-coach">
                        <a>
                        <i className="glyphicon glyphicon-ok"></i>
                        Career Coach</a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/" >
                        <a target="_blank">
                          <i className="glyphicon glyphicon-ok"></i>Link To Website
                        </a>
                      </Link>
                    </li>
                    <li className={this.props.activePage=='/faq' ? "active" : ""}>
                        <Link prefetch href="/user/faq">
                        <a>
                        <i className="glyphicon glyphicon-flag"></i>
                        Help / FAQ </a>
                        </Link>
                    </li>
                    <li>
                      <ApolloConsumer>{
                        client => <a href="#!" onClick={(e)=>{
                          e.preventDefault();
                          e.stopPropagation();
                          document.cookie = cookie.serialize('token', '', {
                            maxAge: -1 // Expire the cookie immediately
                          })
                          document.cookie = cookie.serialize('userType', '', {
                            maxAge: -1 // Expire the cookie immediately
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
