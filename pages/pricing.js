import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Pricingpage/TextContent'  
import withLayout from '../hocs/withLayout'


class StudentPage extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return <Fragment>
      <Nav2 pricingpage="active" image="pricing.gif"/>
      <div className="about">
        <div className="container">
        <h2 className="text-center"><a style={{color : '#fff'}} href="">MCC Pricing Plans</a></h2>
          <TextContent />
        </div>
      </div>      
    </Fragment>
  }
}
export default withLayout(StudentPage)
