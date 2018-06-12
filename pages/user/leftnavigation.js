import React, {Component} from 'react';
import Head from 'next/head'
import Link from 'next/link'





export default class LeftNavigation extends Component{
  constructor(props){
    super(props)
    this.setActive = this.setActive.bind(this)
  }
  
  setActive = (e) => {
    console.log('Free pizza!')
    console.log(e.target.className)
  }

    render(){
        return<div>
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
                    <li className={this.props.dashboard && "active"} >
                      <Link prefetch href="/user/dashboard">
                        <a>
                        <i className="glyphicon glyphicon-home"></i>
                        Home </a>
                      </Link>
                    </li>
                    <li className={this.props.payment && "active"}>
                        <Link prefetch href="/user/payment">
                        <a>
                        <i className="glyphicon glyphicon-user"></i>
                        Make Payment  </a>
                        </Link>
                        
                    </li>
                    <li className={this.props.test && "active"}>
                        <Link prefetch href="/user/mcc-test-code">
                        <a>
                        <i className="glyphicon glyphicon-edit"></i>
                        MCC Test Code </a>
                        </Link>
                    </li>
                    <li className={this.props.career && "active"}>
                        <Link prefetch href="/user/career-coach">
                        <a>
                        <i className="glyphicon glyphicon-ok"></i>
                        Career Coach</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" target="_blank">
                        <a>
                        <i className="glyphicon glyphicon-ok"></i>
                        Link To Website</a>
                        </Link>
                    </li>
                    <li className={this.props.faq && "active"}>
                        <Link prefetch href="/user/faq">
                        <a>
                        <i className="glyphicon glyphicon-flag"></i>
                        Help / FAQ </a>
                        </Link>
                        
                    </li>
                </ul>
            </div>
                
        </div>
        <style jsx>{`
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
              
              .profile-usermenu ul li a ,  .profile-usermenu ul li a:visited, .profile-usermenu ul li a:active {
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
        `}
            </style>
        </div>
    }
}
