import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Aboutpage/TextContent' 
import TextContent2 from '../components/Homepage/TextContent2' 
import MccContent from '../components/Homepage/MccContent' 
import MccContent2 from '../components/Homepage/MccContent2' 
import withLayout from '../components/withLayout'


class StudentPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 studentpage="active" image="bannerStudent.png"/>
      <TextContent />
      <div className="about">
        <div className="container">
          <h2 className="text-center" title="Click Here To Login as Student"><a style={{color:'#fff'}}  href="">Discover your Ideal career in 15 minutes</a></h2>
        </div>
      </div>
      <MccContent />
      <MccContent2 />
      <TextContent2 />
      
    </Fragment>
  }
}
export default withLayout(StudentPage)
