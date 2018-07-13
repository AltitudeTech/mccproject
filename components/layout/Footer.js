import React, { Component, Fragment } from 'react'
import { Mutation, withApollo } from 'react-apollo'

import { NEWSLETTER_SUBSCRIPTION_MUTATION } from '../../lib/backendApi/mutations'

let email

export default props =>
<Fragment>
  <div>
    <img style={{ width : '100%'}} className="item" data-topimage="7%" width="728" usemap="#imgmap" src="/static/images/mobileBanner.jpg" />
      <map name="imgmap">
          <area shape="square" coords="780, 400 , 1030, 480" target="_blank" href="http://www.example.com/"/>
      </map>
    </div>
  <div className="footer">
    <div className="container">
      <div className="col-md-3 w3_footer_grid">
        <h3>About Us</h3>
        <ul>
          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/">Home</a></li>
          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/about">About</a></li>
          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/student">Student</a></li>

          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/institution">Institution</a></li>
          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-3 w3_footer_grid">
        <h3>Info</h3>
        <ul>
          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/affiliates">Affiliates and agents</a></li>
          <li className=""><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="/faq">Frequently Asked Questions</a></li>
        </ul>
      </div>
      <div className="col-md-5 col-md-offset-1 w3_footer_grid">
        <h3>Newsletter</h3>
        <Mutation mutation={NEWSLETTER_SUBSCRIPTION_MUTATION} onCompleted={({subscribeToNewsletter: {address}}) => {
          email.value = ''
          console.log(`${address} has subscribed sucessfully`)
        }} onError={(error) => {
          console.log(error)
        }}>
          {(subscribeToNewsletter, { data, error }) => (
            <form onSubmit={e => {
              e.preventDefault()
              e.stopPropagation()

              subscribeToNewsletter({
                variables: {
                  address: email.value,
                }
              })


            }}>
              <input required="" ref={node => { email = node }} type="email" name="email" placeholder="Your email..." required=""/>
              <input type="submit" value=" "/>
            </form>
          )}
        </Mutation>
        <p>Sign up now for more information about <span>MyCareerChoice</span>
        <img src='/static/images/paymentImage.png' style={{width:'60%'}} className="img-responsive" alt=""/>
        </p>
      </div>
      <div className="clearfix"></div>
      <div className="w3layouts_footer_grid">
        <div className="clearfix"></div>
          <div className="w3layouts_footer_grid_left">
            <a className="navbar-brand" href=""><img src='/static/images/mcclogo.png' className="img-responsive" alt=""/></a>
          </div>

          <div className="w3layouts_footer_grid_right" style={{marginBottom:'30px'}}>
            <p><small className="help-block" style={{fontSize: '10px'}}> <a href="privacy-policy">Privacy Policy</a> | <a href="terms-of-use">Terms of Use</a> | <a href="cookie-policy">Cookie Policy</a></small>
              <div className="clearfix"></div>
                2018 MyCareerChoice. All rights reserved | Powered by <a href="http://altitude-tech.com/" style={{color:'#FF2525'}}>Altitude Technology Worldwide</a></p>
                <div className="clearfix"></div>
                  MCC is a service offered by <img src='/static/images/cilogo.png' style={{width:'150px'}} />
              </div>
          <div className="clearfix"> </div>
      </div>
    </div>
  </div>
</Fragment>
