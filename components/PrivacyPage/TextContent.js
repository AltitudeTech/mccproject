import React, { Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';
import {greenA900, pinkA200, transparent} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class TextContent extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <h2 className="w3ls_para">Privacy policy</h2>
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12">

                {/* <h3>Collection</h3>
                <p>Career Intelligence Human Capital Development Company LImited does not collect personal information from you other than is necessary for you to complete its online behavioral assessment report. Information collected includes, your name and email address. Credit Card details are directly dealt with by eWay www.eway.com.au our Credit Card provider.</p>
                <p>Your information will not be disclosed without your consent. If you are using a Client Access Number to complete an MCC questionnaire then a copy of your MCC report will be sent to the person who has provided you an access code.</p>
                <h3>Use & Disclosure</h3>
                <p>Profile information will only be used for the purpose for which it was collected, that is to provide you, your employer or prospective employer, your behavioral Profile as described in the "sample report" available for viewing on this web site.</p>
                <h3>Data Quality</h3>
                <p>Prior to disclosure of your Profile, reasonable steps will be taken to ensure that the information accurate and complete and up-to-date for the purpose for which it is to be used.</p>
                <h3>Data Security</h3>
                <p>Security will be maintained to protect Profile information against unauthorized access, alterations and accidental loss. Please be aware that no data transmission over the Internet can be guaranteed as totally secure. Your data is stored by our hosting company under a contractual arrangement. </p>
                <h3>Access & Collection</h3>
                <p>Should you consider that your MCC report is not accurate and does not truly represent your behavioral Profile as defined by the DPSA profiling system then you should immediately make contact with us at info@mycareerchoice.global  advising us of your concerns.</p>
                <h3>Anonymity</h3>
                <p>In order for the MCC report to be accurate and reflect your behavioral Profile only your name and e-mail address is required.</p>
                <h3>Sensitive Information</h3>
                <p>Career Intelligence Human capital Development Company Limited does not collect sensitive information about you.</p>
                <h3>Trans Border Data Flow</h3>
                <p>Career Intelligence Human Capital Development Company Limited cannot guarantee that Profiles sent to other countries excluding Nigeria will comply with this Privacy Statement.</p> */}

              </div>
            </div>
          </div>
          <br/><br/>
        </div>
        <style jsx>{`
          h4{
            font-size: 26px;
            margin-bottom: 10px;
          }
          
          h3{
            font-size: 25px;
            font-weight: 500 ;
            margin-bottom: 20px;
          }
          p{
            font-size : 16px ;
            line-height : 30px ;
            margin : 20px auto ;
          }
          li{
            font-size: 16px;
            line-height : 30px;
            color : black ;
          }
          `}
        </style>
      </div>
    );
  }
}
