import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Studentpage/TextContent'  
import withLayout from '../hocs/withLayout'


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
        <h1>PURCHASE AN MCC CODE</h1>
        </div>
      </div>  
      <style jsx>{`
        h1{
          color: #fff ;
          text-align:center ;
          cursor : pointer ;
        }
      `}
      </style>    
    </Fragment>
  }
}
export default withLayout(StudentPage)
