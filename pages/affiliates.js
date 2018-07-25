import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/AffiliatesPage/TextContent'
import RegisterBox from '../components/AffiliatesPage/RegisterBox'
// import TextContent2 from '../components/Aboutpage/TextContent2'
import withLayout from '../hocs/withLayout'


class AffiliatesPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 image="bannerContact.jpg"/>
      <TextContent />
      <RegisterBox />
    </Fragment>
  }
}
export default withLayout(AffiliatesPage, {disableEndorsement: true})
