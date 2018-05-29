import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme' ;
import TextField from 'material-ui/TextField';



const muiThemebtn = getMuiTheme()
const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};
const style = {
  margin: 12,
};
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class CandidateModal extends React.Component {
  constructor({props}){
    super(props) ;
  }
  state = {
    open: false,
  };


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton 
        label="Cancel"
        style={style}
        secondary={true}
        onClick={this.handleClose}
      />,
      <RaisedButton 
        label="Submit"
        style={style}
        primary={true}
      />,
    ];

    return (
      <MuiThemeProvider muiTheme={muiThemebtn}>
        {/* <RaisedButton label="Modal Dialog" onClick={this.handleOpen} /> */}
        <Dialog 
          title="Candidate Login"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        >
          <TextField
             hintText="Username or Email field"
             fullWidth={true}
             errorText=""
             floatingLabelText="Username or Email"
             type="text"
          />
          <TextField
            hintText="Password Field"
            fullWidth={true}
            errorText=""
            floatingLabelText="Password"
            type="password"
          />
        </Dialog>
      </MuiThemeProvider>
    );
  }
}
