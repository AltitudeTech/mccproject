import Head from 'next/head'

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme' ;

// import injectTapEventPlugin from 'react-tap-event-plugin'

const muiThemebtn = getMuiTheme()

export default function withMUI(Child, opts={}) {
    class WrappedComponent extends React.Component {
      static async getInitialProps(context, apolloClient) {
        let ChildProps = {};
        if (Child.getInitialProps) {
          ChildProps = await Child.getInitialProps(context, apolloClient)
        }

        return {
          ...ChildProps,
        }
      }

      render() {
        return (
          <MuiThemeProvider muiTheme={muiThemebtn}>
            <Head>
              <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900&amp;subset=vietnamese" rel="stylesheet"/>
            </Head>
            <Child {...this.props}/>
          </MuiThemeProvider>
        )
      }
    }

    return WrappedComponent
  }
