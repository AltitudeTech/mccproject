import React, { Component, Fragment } from 'react'

import Nav2 from '../components/Nav2'
import TextContent from '../components/Aboutpage/TextContent' 
import TextContent2 from '../components/Aboutpage/TextContent2'  
import withLayout from '../components/withLayout'


class AboutPage extends Component {
  constructor(props){
    super(props) ;
  }
  render(){
    return <Fragment>
      <Nav2 aboutpage="active" image="bannerAbout.jpg" />
      <TextContent />
      <div className="container">
        <div className="row" style={{textAlign:'center', marginBottom : '30px'}}>
          <div className="col-md-4">
            <img src="/static/images/product.jpg" style={{width:'200px'}} />
            <h4>Sample MCC test</h4>
            <a href="https://drive.google.com/file/d/0B7TXJNCnuUOaazZvNHN4R24zRnc/view?usp=sharing" target="_blank">View MCC Sample Test </a>
          </div>
          <div className="col-md-4">
            <img src="/static/images/product.jpg" style={{width:'200px'}}/>
            <h4>Sample MCC Workbook</h4>
            <a href="https://drive.google.com/file/d/0B7TXJNCnuUOacFFsQlpMYnh2bm8/view?usp=sharing" target="_blank">View MCC Sample Workbook</a>
          </div>
          <div className="col-md-4">
            <img src="/static/images/product.jpg" style={{width:'200px'}}/>
            <h4>Sample MCC Report</h4>
            <a href="https://drive.google.com/file/d/0B7TXJNCnuUOaYThqU20xRi1DOXM/view?usp=sharing" target="_blank">View MCC Sample Report</a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <h3 className="w3ls_para">COST OF MYCAREERCHOICE </h3>
          <h4 className="text-center" title="Click Here To Login as Student"><a style={{color:'#fff'}}  href=""><img src="/static/images/mccCost.png" /> This is one off payment that must be made prior to being able to access the MCC test.</a></h4>
        </div>
      </div>
    </Fragment>
  }
}
export default withLayout(AboutPage)
