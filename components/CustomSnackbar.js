import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
 backgroundColor : 'transparent'  ,
 minWidth : '605px',
 height : '170px',
 backgroundImage : 'url(/static/images/discount.PNG)' ,
 backgroundRepeat : 'no-repeat'
}
export default class CustomSnackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount(){
      this.handleClick() 
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
    <MuiThemeProvider>
      <div>
        <Snackbar
          open={this.state.open}
          bodyStyle={styles}
          style={{zIndex:900}}
          autoHideDuration={60000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    </MuiThemeProvider>
    );
  }
}