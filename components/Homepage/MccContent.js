import React, { Component, Fragment } from 'react'

export default props =>
<Fragment>
    <div className="banner-bottom">
        <div className="container">
            <div className="col-md-6 w3layouts_banner_bottom_left">
                <img src="/static/images/1.jpg" alt=" " className="img-responsive" />
            </div>
            <div className="col-md-6 w3layouts_banner_bottom_right">
            
            <ul>
                <li>MCC guarantees you a well informed decision making process based on your passion and talents.</li>
                <li>MCC gives you the opportunity not to repeat the mistakes of others and ensures your career decisions gives you the best chance to succeed in life. </li>
                <li>MCC recognizes that human beings are uniquely talented and that if those talents are discovered early in life, they could be developed and managed to make a happy and successful career </li>
            </ul>
                        
            </div>
            
            <div className="clearfix"></div>
        </div>
    </div>
    <style jsx>{`
    p{
    font-size: 20px;
    line-height : 30px;
    color : black !important;
    }
    li{
        font-size: 1.5em;
        line-height : 1.5em ;
        color : black ;
        margin : 10px auto ;
    }
    `}
    </style>
</Fragment>
