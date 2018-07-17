import React, {Component} from 'react';
// import Link from 'next/link'
import withAffiliatePortal from '../../hocs/affiliate/withAffiliatePortal'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import ContentSave from 'material-ui/svg-icons/content/save';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile-content">
          <div>
              <h2>Profile Details</h2><hr/>
              <p>
                <TextField
                  underlineFocusStyle={{borderColor: "#0c6053"}}
                  underlineStyle={{borderColor: "#ff5722"}}
                  floatingLabelFocusStyle={{color: "#0c6053"}}
                  floatingLabelStyle={{color: "#ff5722"}}
                  // value={this.state.username}
                  // onChange={this.usernameText.bind(this)}
                  floatingLabelText="Lastname"
                  type="text"
                />
                <br />
                <TextField
                  underlineFocusStyle={{borderColor: "#0c6053"}}
                  underlineStyle={{borderColor: "#ff5722"}}
                  floatingLabelFocusStyle={{color: "#0c6053"}}
                  floatingLabelStyle={{color: "#ff5722"}}
                  // value={this.state.username}
                  // onChange={this.usernameText.bind(this)}
                  floatingLabelText="Firstname"
                  type="text"
                />
                <FlatButton
                  icon={<FileCloudUpload />}
                  style={{margin: 12}}
                />
              </p>
              <p>
                <h3>Change password</h3>
                {/* <br/> */}
                <TextField
                  underlineFocusStyle={{borderColor: "#0c6053"}}
                  underlineStyle={{borderColor: "#ff5722"}}
                  floatingLabelFocusStyle={{color: "#0c6053"}}
                  floatingLabelStyle={{color: "#ff5722"}}
                  // value={this.state.username}
                  // onChange={this.usernameText.bind(this)}
                  floatingLabelText="Current password"
                  type="text"
                />
                <br />
                <TextField
                  underlineFocusStyle={{borderColor: "#0c6053"}}
                  underlineStyle={{borderColor: "#ff5722"}}
                  floatingLabelFocusStyle={{color: "#0c6053"}}
                  floatingLabelStyle={{color: "#ff5722"}}
                  // value={this.state.username}
                  // onChange={this.usernameText.bind(this)}
                  floatingLabelText="New password"
                  type=
                  "text"
                />
                <br/>
                <TextField
                  underlineFocusStyle={{borderColor: "#0c6053"}}
                  underlineStyle={{borderColor: "#ff5722"}}
                  floatingLabelFocusStyle={{color: "#0c6053"}}
                  floatingLabelStyle={{color: "#ff5722"}}
                  // value={this.state.username}
                  // onChange={this.usernameText.bind(this)}
                  floatingLabelText="Confirm password"
                  type="text"
                />
                <FlatButton
                  icon={<ContentSave />}
                  style={{margin: 12}}
                />
              </p>
              {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p> */}
          </div>
        </div>
    }
}
export default withAffiliatePortal(Dashboard, {activePage: '/profile'})
