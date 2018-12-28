import React from "react";
import Router from "next/router";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { ApolloConsumer } from "react-apollo";

import { USER_ISAUTHENTICATED_QUERY } from "../../lib/graphql/queries";
import { LoginModalContext } from "../../contexts/LoginModalContext";

const style = {
  height: "auto",
  width: "45%",
  margin: 10,
  paddingTop: 30,
  paddingBottom: 30,
  textAlign: "center",
  display: "inline-block"
};

const TextComponent = () => (
  <MuiThemeProvider>
    <Paper style={style} zDepth={2}>
      <h3>Student</h3>
      <br />
      <img src="/static/images/student.svg" style={{ width: "inherit" }} />
      <br />
      <List>
        <Subheader>FEATURES</Subheader>
        <ListItem
          primaryText="MCC Code"
          secondaryText="Change your Google+ profile photo"
        />
        <ListItem
          primaryText="MCC + 1hr Phone Call"
          secondaryText="(optional)"
        />
        <ListItem
          primaryText="MCC + 1hr Video Call"
          secondaryText="(optional)"
        />
      </List>
      <br />
      <LoginModalContext.Consumer>
        {({ toggleModal }) => (
          <ApolloConsumer>
            {client => (
              <RaisedButton
                label="Place Order NOW"
                labelColor="#fff"
                backgroundColor="#FF6C36"
                onClick={async () => {
                  const {
                    data: { userIsAuthenticated }
                  } = await client.query({ query: USER_ISAUTHENTICATED_QUERY });
                  if (userIsAuthenticated) {
                    Router.push("/user/dashboard");
                  } else {
                    toggleModal();
                  }
                }}
              />
            )}
          </ApolloConsumer>
        )}
      </LoginModalContext.Consumer>
    </Paper>
    <Paper style={style} zDepth={2}>
      <h3 className="institution">Institution</h3>
      <br />
      <img src="/static/images/institution.svg" style={{ width: "inherit" }} />
      <br />
      <List>
        <Subheader>FEATURES</Subheader>
        <ListItem
          primaryText="MCC Code"
          secondaryText="take advantage of 20% discount for bulk purchase"
        />
        <ListItem
          primaryText="MCC + 1hr Phone Call"
          secondaryText="(optional)"
        />
        <ListItem
          primaryText="MCC + 1hr Video Call"
          secondaryText="(optional)"
        />
      </List>
      <br />
      <LoginModalContext.Consumer>
        {({ toggleModal }) => (
          <ApolloConsumer>
            {client => (
              <RaisedButton
                label="Place Order NOW"
                labelColor="#fff"
                backgroundColor="#0C6053"
                onClick={async () => {
                  const {
                    data: { userIsAuthenticated }
                  } = await client.query({ query: USER_ISAUTHENTICATED_QUERY });
                  if (userIsAuthenticated) {
                    Router.push("/institution/dashboard");
                  } else {
                    toggleModal();
                  }
                }}
              />
            )}
          </ApolloConsumer>
        )}
      </LoginModalContext.Consumer>
    </Paper>
    <style jsx>
      {`
        h3 {
          font-weight: 300;
          display: inline-block;
          padding-bottom: 5px;
          position: relative;
        }
        h3:before {
          content: "";
          position: absolute;
          width: 50%;
          height: 1px;
          bottom: 0;
          left: 25%;
          border-radius: 10px;
          border-bottom: 3px solid #ff6c36;
        }
        h3.institution:before {
          border-bottom: 3px solid #0c6053;
        }
      `}
    </style>
  </MuiThemeProvider>
);

export default TextComponent;
