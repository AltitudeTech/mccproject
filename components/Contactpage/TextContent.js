import React, { Component, Fragment } from 'react'


export default class TextContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="mail">
            <div className="container">
                <div className="agileits_w3layouts_mail">
                    <div className="col-md-4 agileits_w3layouts_mail_left">
                        <div className="w3_agileits_mail_left">
                            <h4><i className="fa fa-map-marker" aria-hidden="true"></i>North America </h4>
                            <p className="wthree_address">3481 Melrose Place, 2K32 Street , Beverly Hills, New York City 90210.</p>
                        </div>
                    </div>
                    <div className="col-md-4 agileits_w3layouts_mail_left">
                        <div className="w3_agileits_mail_left">
                            <h4><i className="fa fa-map-marker" aria-hidden="true"></i>Europe/Asia</h4>
                            <div className="w3_agileits_mail_left1">
                                <a href="mailto:info@example.com">info@example1.com</a>
                                <a href="mailto:info@example.com">info@example2.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 agileits_w3layouts_mail_left">
                        <div className="w3_agileits_mail_left">
                            <h4><i className="fa fa-map-marker" aria-hidden="true"></i>Africa/Middle East</h4>
                            <div className="w3_agileits_mail_left1">
                                <p className="agileinfo_para">(+000) 123 345 456</p>
                                <p className="agileinfo_para">(+010) 123 345 458</p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>

        <div className="services-bottom">
            <div className="container">
                <p className="w3ls_para">OUR CUSTOMER SERVICE TEAM ARE WAITING FOR YOUR MESSAGE</p>
                <div className="w3l_services_bottom_grids contact-right-w3l">
                    <form action="#" method="post">
                        <input type="text" className="name" name="name" placeholder="Your Name" required=""/>
                        <input type="email" className="name" name="name" placeholder="Email" required=""/>
                        <textarea placeholder="Your Message" required=""></textarea>
                        <input type="submit" value="SEND MESSAGE"/>
                    </form>
                </div>
            </div>
        </div>
        <style jsx>{`

            .contact-right-w3l ::-webkit-input-placeholder {
            color: #fff;
            }
            .contact-right-w3l:-moz-placeholder {
            color: #fff;
            } 
            .contact-right-w3l ::-moz-placeholder { 
                color: #fff;  
            } 
            .contact-main :-ms-input-placeholder {  
                color: #fff;
            }	
            .contact-right-w3l input[type="text"], .contact-right-w3l input[type="email"] {
                font-size: 1em;
                border: none;
                background: rgba(202, 200, 200, 0.82);
                outline: none;
                padding: 0.5em 1em;
                width: 100%;
                margin-bottom: 1em;
                color: #fff;
            }
            .contact-right-w3l textarea{
                width:100%;
                padding: 0.5em 1em;
                outline:none;
                resize:none;
                height:100px;
                border:none;
                font-size:1em;
                background:rgba(202, 200, 200, 0.82);
                color:#fff;
            }
            .contact-right-w3l input[type="submit"] {
                background: #fff;
                color: #000;
                padding: .5em 1.8em;
                margin-top: 1.3em;
                border: 1px solid #ffffff;
                outline: none;
                font-size: 0.9em;
            }
            .contact-right-w3l input[type="submit"]:hover {
                background: #39cad3;
                color: #fff;
                border: 1px solid #39cad3;
            }
            .contact-right-w3l {
                left: 28%;
                margin: 0 auto;
                background: rgba(0, 0, 0, 0.56);
                background-size: cover;
                width: 46%;
            }
            .contact-right-w3l form {
                width: 100%;
                padding: 3em;
                margin: 0 auto;
            }`}
            </style>
      </Fragment>
    );
  }
}