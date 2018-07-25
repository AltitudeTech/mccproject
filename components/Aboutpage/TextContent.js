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
          <h2 className="w3ls_para">What Is MyCareerChoice ? </h2>
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12">
                <p>
                  MCC is an online personality assessment program that matches personalities to specific career. MCC is suitable for youth from age 13 to adulthood. It is highly beneficial to undergraduates and postgraduates and those seeking to change careers regardless of age.  
                </p>
              </div>
            </div>
          </div>
          <br/><br/>
          <div className="w3l_services_grids"  style={{backgroundColor : ''}}>
            <div className="row">
              <div className="col-md-6">
                <h4 className="w3ls_para">Why MyCareerChoice ? </h4>
                <p>
                <MuiThemeProvider>
                  <List>
                    <ListItem
                      primaryText="Reveal your true passions and talents"
                      leftIcon={<ActionGrade color={greenA900} />}
                    />
                    <ListItem
                      primaryText="Reduce rate of career failures"
                      leftIcon={<ActionGrade color={greenA900} />}
                    />
                    <ListItem
                      primaryText="Reduce job mismatches"
                      leftIcon={<ActionGrade color={greenA900} />}
                    />
                    <ListItem
                      primaryText="Secure a bright future"
                      leftIcon={<ActionGrade color={greenA900} />}
                    />
                    <ListItem
                      primaryText="Know more about yourself"
                      leftIcon={<ActionGrade color={greenA900} />}
                    />
                  </List>
                </MuiThemeProvider>
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="w3ls_para">HOW IT WORKS </h4>
                <p>
                  <MuiThemeProvider>
                    <List>
                      <ListItem
                        primaryText="Register"
                        leftIcon={<ActionGrade color={pinkA200} />}
                      />
                      <ListItem
                        primaryText="Make a payment"
                        leftIcon={<ActionGrade color={pinkA200} />}
                      />
                      <ListItem
                        primaryText="Take MCC Test"
                        leftIcon={<ActionGrade color={pinkA200} />}
                      />
                      <ListItem
                        primaryText="Receive your report"
                        leftIcon={<ActionGrade color={pinkA200} />}
                      />
                      <ListItem
                        primaryText="Review the report and follow the work book in making your career decision."
                        leftIcon={<ActionGrade color={pinkA200} />}
                      />
                    </List>
                  </MuiThemeProvider>
                </p>
              </div>
            </div>
          </div>
         
        </div>
        <style jsx>{`
          h4{
            font-size: 26px;
            margin-bottom: 10px;
          }
          p{
            font-size : 18px ;
            line-height : 30px ;
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