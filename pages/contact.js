import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Contactpage/TextContent' 
import withLayout from '../hocs/withLayout'


class ContactPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 contactpage="active" image="bannerContact.jpg"/>
      <TextContent />
    </Fragment>
  }
}
export default withLayout(ContactPage)
