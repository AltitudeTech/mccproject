// import React, { Component} from 'react'
// import Button from '@material-ui/core/Button'


// export default class TextContent extends Component {
//   render() {
//     return (
//       <div className="banner-bottom">
//         <div className="container">
//           <div className="col-md-4 w3layouts_banner_bottom_left hidden-md">
//             <img src="/static/images/1-1.png" alt=" " style={{width:'100%'}} className="img-responsive" />
//           </div>
//           <div className="col-md-4 col-sm-12 w3layouts_banner_bottom_right">
//             <h4>welcome to MyCareerChoice</h4>
//             <p>
//               The secret to career satisfaction lies in doing what you enjoy most. Careers that match your personality style make the best use of your natural gifts and talents and will give you the greatest happiness in your life. There is a strong link between the career you choose and your purpose in life. Your Career is the vehicle that carries you to your purpose.
//             </p>
//             <div className="w3_more">
//             <Button size="large" color="primary" variant="outlined" href="about" >
//               Read More
//             </Button>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-12 w3layouts_banner_bottom_right">
//             <h4>welcome to MyCareerChoice</h4>
//             <p>
//               The secret to career satisfaction lies in doing what you enjoy most. Careers that match your personality style make the best use of your natural gifts and talents and will give you the greatest happiness in your life. There is a strong link between the career you choose and your purpose in life. Your Career is the vehicle that carries you to your purpose.
//             </p>
//             <div className="w3_more">
//             <Button size="large" color="primary" variant="outlined" href="about" >
//               Read More
//             </Button>
//             </div>
//           </div>
//           <div className="clearfix"></div>
//         </div>
//         <style jsx>{`
//           h4{
//             font-size: 26px;
//             margin-bottom: 10px ;
//           }
//           li{
//               font-size: 16px;
//               line-height : 30px;
//               color : black ;
//           }
//           `}
//         </style>
//       </div>
//     );
//   }
// }


import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  height: 'auto',
  width: '45%',
  margin: 10,
  paddingTop: 30,
  paddingBottom: 30,
  textAlign: 'center',
  display: 'inline-block',
};

const TextComponent = () => (
  <MuiThemeProvider>
    <Paper style={style} zDepth={2}>
      <h3>Student</h3><br/>
      <img src='/static/images/product.jpg' style={{width:'inherit'}} /><br/>
      <List>
        <Subheader>FEATURES</Subheader>
        <ListItem
          primaryText="Profile photo"
          secondaryText="Change your Google+ profile photo"
        />
        <ListItem
          primaryText="Show your status"
          secondaryText="Your status is visible to everyone you use with"
        />
      </List><br/>
      <RaisedButton label="Place Order NOW" labelColor="#fff" backgroundColor="#FF6C36" />
    </Paper>
    <Paper style={style} zDepth={2}>
      <h3 className='institution'>Institution</h3><br/>
      <img src='/static/images/product.jpg' style={{width:'inherit'}} /><br/>
      <List>
        <Subheader>FEATURES</Subheader>
        <ListItem
          primaryText="Profile photo"
          secondaryText="Change your Google+ profile photo"
        />
        <ListItem
          primaryText="Show your status"
          secondaryText="Your status is visible to everyone you use with"
        />
      </List><br/>
      <RaisedButton label="Place Order NOW" labelColor="#fff" backgroundColor="#0C6053" />
    </Paper>
    <style jsx>{`
      h3 {
        font-weight: 300;
        display: inline-block;
        padding-bottom: 5px;
        position: relative;
      }
      h3:before{
          content: "";
          position: absolute;
          width: 50%;
          height: 1px;
          bottom: 0;
          left: 25%;
          border-radius: 10px ;
          border-bottom: 3px solid #FF6C36;
      }
      h3.institution:before{
        border-bottom: 3px solid #0C6053;
    }
    `}
    </style>
  </MuiThemeProvider>
);

export default TextComponent;