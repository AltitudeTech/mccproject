import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Institutionpage/TextContent'  
import withLayout from '../components/withLayout'


class InstitutionPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 institutionpage="active" image="bannerInstitution.jpg" />
      <TextContent />
      <div className="about">
        <div className="container">
          <h2 className="text-center" title="Click Here To Login as Student"><a style={{color:'#fff'}}  href="">Discover your Ideal career in 15 minutes</a></h2>
        </div>
      </div>      
    </Fragment>
  }
}
export default withLayout(InstitutionPage)
