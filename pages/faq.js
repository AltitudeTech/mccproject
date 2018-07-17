import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/FAQPage/TextContent'
// import TextContent2 from '../components/Aboutpage/TextContent2'
import withLayout from '../hocs/withLayout'


class FAQPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 image="bannerContact.jpg"/>
      <TextContent />
      {/* <div className="about">
        <div className="container">
          <h3 className="w3ls_para">COST OF MYCAREERCHOICE </h3>
          <h4 className="text-center" title="Click Here To Login as Student"><a style={{color:'#fff'}}  href="">MCC cost $20. This is one off payment that must be made prior to being able to access the MCC test. There are various payment options and could be accessed once registration is completed.</a></h4>
        </div>
      </div> */}
    </Fragment>
  }
}
export default withLayout(FAQPage, {disableEndorsement: true})
