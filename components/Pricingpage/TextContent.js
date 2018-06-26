import React from 'react';
import Router from 'next/router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { ApolloConsumer } from 'react-apollo'

import { CANDIDATE_ISAUTHENTICATED_QUERY } from '../../lib/backendApi/queries'
import { LoginModalContext } from '../Context/LoginModalContext'

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
      <LoginModalContext.Consumer>{
        ({toggleModal}) => (
          <ApolloConsumer>
            {client => (
              <RaisedButton label="Place Order NOW" labelColor="#fff" backgroundColor="#FF6C36"
                onClick={async () => {
                  const { data : { candidateIsAuthenticated } } = await client.query({query: CANDIDATE_ISAUTHENTICATED_QUERY});
                  if (candidateIsAuthenticated) {
                    Router.push('/user/dashboard');
                  } else {
                    toggleModal();
                  }
                }}/>
              )}
            </ApolloConsumer>
        )}
      </LoginModalContext.Consumer>
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
