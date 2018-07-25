import {Component, Fragment} from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme' ;
import TextField from 'material-ui/TextField';

import { AffiliateDetailsContext } from '../../../contexts/AffiliateDetailsContext'
import SaveCouponButton from './SaveCouponButton'

const muiThemebtn = getMuiTheme()
const style = {
  margin: '6px'
}
export default class CouponModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      // isOpen: true,
      coupon: '',
      error: ''
    }
  }

  showError = (error) => {
    this.setState({error});
  }

    render(){
      const actions = [
        <SaveCouponButton
          coupon={this.state.coupon}
          setModalOpen={this.props.setModalOpen}
          showError={this.showError}
        />,
        <RaisedButton
          label="Cancel"
          style={style}
          backgroundColor='#ff5722'
          labelColor="white"
          onClick={e=>this.props.setModalOpen(false)}
        />
      ];
        return <MuiThemeProvider muiTheme={muiThemebtn}>
          <Dialog
            style={{zIndex : 1000}}
            actions={actions}
            modal={true}
            open={this.props.isOpen}
            // open={true}
            // contentStyle={customContentStyle}
            >
              <div>
                {/* <AffiliateDetailsContext.Consumer>{
                  ({ affiliate: { coupon } }) => <Fragment>
                    <div>Coupon Code: {coupon ? coupon.coupon : <a>No coupon bruh</a>}</div>
                  </Fragment>
                }</AffiliateDetailsContext.Consumer> */}
                Create Your MCC Coupon Code
                <TextField
                  underlineFocusStyle={{borderColor: "#0c6053"}}
                  floatingLabelFocusStyle={{color: "#0c6053"}}
                  fullWidth={true}
                  // errorText={this.state.usernameError}
                  value={this.state.coupon}
                  onChange={(e) => this.setState({coupon : e.target.value})}
                  floatingLabelText="Code"
                  type="text"
                />
                {/* <span className="code-conditions">Minimun of 6 characters and maximum of 10 alphanumeric characters</span> */}
                {this.state.error && <span className="code-conditions">{this.state.error}</span>}
              </div>
            </Dialog>
            <style jsx>{`
              .code-conditions {
                color: #d42929;
                font-size: 14px;
              }
            `}</style>
          </MuiThemeProvider>
    }
}
