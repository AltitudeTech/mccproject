import React, { Component} from 'react'
import Button from '@material-ui/core/Button'


export default class TextContent extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <h2 className="w3ls_para">What Is MyCareerChoice ? </h2>
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12 w3layouts_vertical_tab">
                <p>
                  MCC is an online personality assessment program that matches personalities to specific career. MCC is suitable for youth from age 13 to adulthood. It is highly beneficial to undergraduates and postgraduates and those seeking to change careers regardless of age.  
                </p>
                
              </div>
              <div className="col-md-5 w3layouts_vertical_tab_right">	
                <img src="/static/images/about1.png" alt=" " className="img-responsive" />
              </div>
        </div>
          </div>
        </div>
        <style jsx>{`
          h4{
            font-size: 26px;
            margin-bottom: 10px;
          }
          `}
        </style>
      </div>
    );
  }
}