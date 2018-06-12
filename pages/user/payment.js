import React, {Component} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import LeftNavigation from './leftnavigation'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import withCandidatePortal from '../../components/HOCS/candidate/withCandidatePortal'


const styles = {
    customWidth: {
      width: 150,
    },
  };

class Payment extends Component{
    state = {
        value: 10,
      };
    
      handleChange = (event, index, value) => {
        this.setState({value});
      };

    render(){
        return<div>
        <Head>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta charSet="utf-8"/> 
          <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
          <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        </Head>
        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                    <LeftNavigation payment='payment' />
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        <div>
                            <h2>Payment Portal</h2><hr/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>  
                        <div className="col-md-6">
                        <Card>
                            <CardTitle title="MCC Test Code" subtitle="Career Intelligence" />
                            <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat.
                            </CardText>
                            <CardActions>
                            <SelectField
                                floatingLabelText="Select Currency"
                                value={this.state.value}
                                onChange={this.handleChange}
                                maxHeight={200}
                                style={styles.customWidth}
                            >
                                <MenuItem value={null} primaryText="" />
                                <MenuItem value={"USD"} primaryText="USD" />
                                <MenuItem value={"POUNDS"} primaryText="POUNDS" />
                                <MenuItem value={"NAIRA"} primaryText="NAIRA" />
                            </SelectField>

                            <RaisedButton primary="true" label="Pay NOW" />

                            </CardActions>
                        </Card>
                        </div>    
                        <div className="col-md-6">
                            
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            body {
                background: #F1F3FA;
              }
              
              .profile {
                margin: 10px 0;
              }
              
              .profile-content{box-shadow:1px 1px 10px rgba(0,0,0,0.3);}
              .profile-content {
                padding: 20px;
                background: #f6f6f6;
                min-height: 600px;
                margin-bottom:30px;
              }
              .profile-content p{
                font-size : 16px ;
                line-height : 30px ;
              }
        `}
            </style>
        </div>
    }
}
export default withCandidatePortal(Payment)