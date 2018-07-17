import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Institutionpage/TextContent'  
import withLayout from '../hocs/withLayout'


class InstitutionPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 institutionpage="active" image="bannerInstitution.jpg" />
      <TextContent />
    </Fragment>
  }
}
export default withLayout(InstitutionPage)
