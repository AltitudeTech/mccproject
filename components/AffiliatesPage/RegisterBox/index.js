import React from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme' ;
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import { Grid, Row, Col } from 'react-bootstrap'

import RegisterButton from './RegisterButton'

const EMAIL_REGEX = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const muiThemebtn = getMuiTheme()
const customContentStyle = {
  maxWidth: '40%',
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    paddingTop : 10,
    paddingBottom: 0,
    height : 325
  },
  tab: {
    backgroundColor : '#fff',
    color : '#646666'
  },
};

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class CandidateModal extends React.Component {
  constructor({props}){
    super(props) ;
    this.showRegisterError = this.showRegisterError.bind(this);
    this.showRegisterMessage = this.showRegisterMessage.bind(this);
  }
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    ConfirmPassword: '',
    workAddress: '',
    physicalAddress: '',
    referee1name: '',
    referee1phone: '',
    referee2name: '',
    referee2phone: '',
    registerErrorText: '',
    registerSuccessText: ''
  };

  emailText = (event) => {
    this.setState({email : event.target.value})
    EMAIL_REGEX.test(this.state.email)? this.setState({emailError:''}):this.setState({emailError:'Invalid Email'})
  };

  showRegisterError = (message) => {
    this.setState({registerErrorText: message})
    setTimeout(()=>{ this.setState({registerErrorText: ''}) },5*1000)
  }
  showRegisterMessage = (message) => {
    this.setState({registerSuccessText: message})
  }

  render() {
    // const registerType = 0;

    return (
      <Grid>
        <MuiThemeProvider muiTheme={muiThemebtn}>
              {/* <RaisedButton label="Modal Dialog" onClick={this.handleOpen} /> */}
              <div
                className="register-wrapper"
                >
                  <p className="form-header">
                    Details
                  </p>
                  <Row className="register-form" >

                    <Col md="6" sm="12">
                        <TextField
                          underlineFocusStyle={{borderColor: "#0c6053"}}
                          floatingLabelFocusStyle={{color: "#0c6053"}}
                          style={styles.textfield}
                          // hintText={registerType == 0 ? 'e.g John Doe' : registerType == 1 ? 'e.g Google'  : 'Adviser Fullname'}
                          fullWidth={true}
                          errorText=''
                          value={this.state.name}
                          onChange={(e) => this.setState({name : e.target.value})}
                          floatingLabelText='Fullname'
                          type="text"
                        />
                        <TextField
                          underlineFocusStyle={{borderColor: "#0c6053"}}
                          floatingLabelFocusStyle={{color: "#0c6053"}}
                          // hintText="example@gmail.com"
                          fullWidth={true}
                          errorText=''
                          value={this.state.email}
                          onChange={(e) => this.setState({email : e.target.value})}
                          floatingLabelText="Email"
                          type="text"
                        />
                        <TextField
                          underlineFocusStyle={{borderColor: "#0c6053"}}
                          floatingLabelFocusStyle={{color: "#0c6053"}}
                          // hintText="Password"
                          fullWidth={true}
                          value={this.state.password}
                          onChange={(e) => this.setState({password : e.target.value})}
                          errorText=''
                          floatingLabelText="Password"
                          type="password"
                        />
                        <TextField
                          underlineFocusStyle={{borderColor: "#0c6053"}}
                          floatingLabelFocusStyle={{color: "#0c6053"}}
                          // hintText="Password"
                          fullWidth={true}
                          value={this.state.ConfirmPassword}
                          onChange={(e) => this.setState({ConfirmPassword : e.target.value})}
                          errorText=''
                          floatingLabelText="Confirm Password"
                          type="password"
                        />
                        </Col>
                    <Col md="6" sm="12">
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        hintText="eg. +1818855611"
                        fullWidth={true}
                        errorText=''
                        value={this.state.phone}
                        onChange={(e) => this.setState({phone : e.target.value})}
                        floatingLabelText="Phone"
                        type="text"
                      />
                        <TextField
                          underlineFocusStyle={{borderColor: "#0c6053"}}
                          floatingLabelFocusStyle={{color: "#0c6053"}}
                          style={styles.textfield}
                          // hintText={registerType == 0 ? 'e.g John Doe' : registerType == 1 ? 'e.g Google'  : 'Adviser Fullname'}
                          fullWidth={true}
                          errorText=''
                          value={this.state.physicalAddress}
                          onChange={(e) => this.setState({physicalAddress : e.target.value})}
                          floatingLabelText='Physical Address'
                          type="text"
                        />
                        <TextField
                          underlineFocusStyle={{borderColor: "#0c6053"}}
                          floatingLabelFocusStyle={{color: "#0c6053"}}
                          // hintText="example@gmail.com"
                          fullWidth={true}
                          errorText=''
                          value={this.state.workAddress}
                          onChange={(e) => this.setState({workAddress : e.target.value})}
                          floatingLabelText="Work Address (if applicable)"
                          type="text"
                        />
                      </Col>
                  </Row>
                  <br/>
                  <p className="form-header top-padding">
                    Referees
                  </p>
                  <Row className="referees-form" >
                    <Col md="6" sm="12">
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        style={styles.textfield}
                        // hintText={registerType == 0 ? 'e.g John Doe' : registerType == 1 ? 'e.g Google'  : 'Adviser Fullname'}
                        fullWidth={true}
                        errorText=''
                        value={this.state.referee1name}
                        onChange={(e) => this.setState({referee1name : e.target.value})}
                        floatingLabelText='Referee Name'
                        type="text"
                      />
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        // hintText="example@gmail.com"
                        fullWidth={true}
                        errorText=''
                        value={this.state.referee1phone}
                        onChange={(e) => this.setState({referee1phone : e.target.value})}
                        floatingLabelText="Referee phone"
                        type="text"
                      />
                    </Col>
                    <Col md="6" sm="12">
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        style={styles.textfield}
                        // hintText={registerType == 0 ? 'e.g John Doe' : registerType == 1 ? 'e.g Google'  : 'Adviser Fullname'}
                        fullWidth={true}
                        errorText=''
                        value={this.state.referee2name}
                        onChange={(e) => this.setState({referee2name : e.target.value})}
                        floatingLabelText='Referee Name'
                        type="text"
                      />
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        // hintText="example@gmail.com"
                        fullWidth={true}
                        errorText=''
                        value={this.state.referee2phone}
                        onChange={(e) => this.setState({referee2phone : e.target.value})}
                        floatingLabelText="Referee phone"
                        type="text"
                      />
                    </Col>
                  </Row>
                  {this.state.registerErrorText && (
                    <p className='login-error-text'>{this.state.registerErrorText}</p>
                  )}
                  {this.state.registerSuccessText && (
                    <p className='login-success-text'>{this.state.registerSuccessText}</p>
                  )}
                  <br />
                    {/* <RaisedButton
                      className="register-button"
                      label="Register"
                      backgroundColor='#0c6053'
                      labelColor="white"
                      onClick={this.props.close}
                    /> */}
                    <RegisterButton {...this.state}
                      showRegisterError={this.showRegisterError}
                      showRegisterMessage={this.showRegisterMessage}/>
                      <style jsx>{`
                        .register-wrapper{
                          padding-bottom: 5em;
                        }
                        .top-padding{
                          padding-top: 0.4em;
                        }
                        .form-header{
                          font-size : 18px ;
                          line-height : 30px ;
                        }
                        .register-form {
                          // margin: 0px auto 60px;
                          width: 40%;
                        }
                        .login-error-text {
                          padding-top: 10px;
                          color: #ec1818;
                          text-size-adjust: 100%;
                          font-family: Roboto,sans-serif;
                          font-size: 16px;
                          line-height: 1.6;
                          word-wrap: break-word;
                        }
                        .login-success-text {
                          padding-top: 10px;
                          color: #094211;
                          text-size-adjust: 100%;
                          font-family: Roboto,sans-serif;
                          font-size: 16px;
                          line-height: 1.6;
                          word-wrap: break-word;
                        }
                        ::-webkit-scrollbar {
                          width: 3px;
                        }
                        ::-webkit-scrollbar-track {
                          webkit-box-shadow: inset 0 0 6px #e3ebef;
                          -webkit-border-radius: 10px;
                          border-radius: 10px;
                          background: #e3ebef;
                        }
                        ::-webkit-scrollbar-thumb {
                          -webkit-border-radius: 10px;
                          border-radius: 10px;
                          background: #9fb6c3;
                          -webkit-box-shadow: none;
                        }
                        ::-webkit-scrollbar-thumb:window-inactive {
                          background: #9fb6c3;
                        }
                        `}</style>
                    </div>
                  </MuiThemeProvider>
      </Grid>
    )
  }
}
