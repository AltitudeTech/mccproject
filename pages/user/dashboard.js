import React, {Component} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import LeftNavigation from './leftnavigation'
import withCandidatePortal from '../../components/HOCS/candidate/withCandidatePortal'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<div>
        <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
          </Head>
        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-usertitle">
                            <img src="http://www.joblo.com/newsimages1/logan-x-24-hugh-jackman-villain-thumb.jpg" className="img-circle" width="100px"/>

                            <div className="profile-usertitle-name">
                            John Doe
                            </div>
                            <div className="profile-usertitle-job">
                                Candidate
                            </div>
                        </div>

                        <div className="profile-userbuttons">
                        	<button type="button" className="btn btn-danger btn-sm">Message</button>
                        </div>

                        <div className="profile-usermenu">
                            <ul className="nav">
                                <li className="active">
                                    <a href="#">
                                    <i className="glyphicon glyphicon-home"></i>
                                    Home </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="glyphicon glyphicon-user"></i>
                                    Make Payment  </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="glyphicon glyphicon-edit"></i>
                                    MCC Test Code </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="glyphicon glyphicon-ok"></i>
                                    Career Coach</a>
                                </li>
                                    <li>
                                    <a href="#">
                                    <i className="glyphicon glyphicon-flag"></i>
                                    Help / FAQ </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                    <div>
                        <h2>Candidate Portal</h2><hr/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                            {/* <Query query={PROFILE_VIEWER_CANDIDATE_QUERY}>
                            {({loading, error, data}) => {
                                if (loading)
                                return "Loading...";
                                if (error)
                                return `Error! ${error.message}`;

                                const {viewerCandidate: {candidate}} = data;
                                return (
                                <div>
                                    <Row>
                                    <Col md="8" xs="12">
                                        <ProfileSection user={candidate} update={this.props.update}/>
                                    </Col>
                                    <Col md="4" xs="12">
                                        <DetailsSection user={candidate}/>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md="8">
                                        <MoreDetails user={candidate} update={this.props.update}/>
                                        <ExperienceSection />
                                        <EducationSection />
                                        <CertificatesSection />
                                        <RefereesSection />
                                        </Col>
                                    </Row>
                                </div>
                                )
                            }}
                            </Query> */}
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            body {
                background: #F1F3FA;
              }

              .profile {
                margin: 10px 0;
              }

              .profile-sidebar {
                padding: 20px 0 10px 0;
                background: #09925E;
                color : #fff ;
                box-shadow:1px 1px 10px rgba(0,0,0,0.3)
              }

              .profile-userpic img {
                float: none;
                margin: 0 auto;
                width: 50%;
                height: 50%;
                -webkit-border-radius: 50% !important;
                -moz-border-radius: 50% !important;
                border-radius: 50% !important;
              }

              .profile-usertitle {
                text-align: center;
                margin-top: 20px;
              }

              .profile-usertitle-name {
                color: #fff;
                font-size: 20px;
                font-weight: 600;
                margin-top:5px;
                margin-bottom: 7px;
              }

              .profile-usertitle-job {
                color: #b2b2b2;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 15px;
              }

              .profile-userbuttons {
                text-align: center;
                margin-top: 10px;
              }

              .profile-userbuttons .btn {
                text-transform: uppercase;
                font-size: 11px;
                font-weight: 600;
                padding: 6px 15px;
                margin-right: 5px;
              }

              .profile-userbuttons .btn:last-child {
                margin-right: 0px;
              }

              .profile-usermenu {
                margin-top: 30px;
              }

              .profile-usermenu ul li {
                border-bottom: 1px solid #096C47;
              }

              .profile-usermenu ul li:last-child {
                border-bottom: none;
              }

              .profile-usermenu ul li a {
                color: #b2b2b2;
                font-size: 16px;
                font-weight: 400;
                padding : 20px;
              }

              .profile-usermenu ul li a i {
                margin-right: 8px;
                font-size: 14px;
              }

              .profile-usermenu ul li a:hover {
                background-color: #096C47;
                color: #fff;
              }

              .profile-usermenu ul li.active {
                border-bottom: none;
              }

              .profile-usermenu ul li.active a {
                color: #fff;
                background-color: #096C47;
                border-right: 2px solid #3EC28F;
                margin-right: -2px;
              }

              .profile-content{box-shadow:1px 1px 10px rgba(0,0,0,0.3);}
              .profile-content {
                padding: 20px;
                background: #f6f6f6;
                min-height: 600px;
                margin-bottom:30px;
              }
              .profile-content p{
                font-size : 16px ;
                line-height : 30px ;
              }
        `}
            </style>
        </div>
    }
}
export default withCandidatePortal(Dashboard)
