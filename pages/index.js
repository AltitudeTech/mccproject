import React, { Component, Fragment } from 'react'

import Nav from '../components/Nav'
import TextContent from '../components/Homepage/TextContent'
import TextContent2 from '../components/Homepage/TextContent2'
import MccContent from '../components/Homepage/MccContent'
import MccContent2 from '../components/Homepage/MccContent2'
import withLayout from '../components/withLayout'

import {LoginModalContext} from '../components/Context/LoginModalContext'

class IndexPage extends Component {
  static async getInitialProps({query}) {
    return {
      showSignIn: query.show == 'signIn'
    }
  }

  stlyes = {
    color : 'white'
  }
  render(){
    const {showSignIn} = this.props;
    return <LoginModalContext.Consumer>{
      ({handleModalOpen}) => {
        if (showSignIn) {
          handleModalOpen()
        }

        return (<Fragment>
          <Nav homepage="active"/>
          <TextContent />
          <div className="about">
            <div className="container">
              <h2 className="text-center"><a id="discover" href="">Discover your Ideal career in 15 minutes</a></h2>
              <br/>
              <div className="row">
                <div className="col-md-6">
                  <p style={{color : '#fff'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                  <p style={{color : '#fff'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
                <div className="col-md-6">
                  <img src="/static/images/personalitymap.jpg" style={{width:'100%'}} />
                  <p className="text-center lead" style={{color : '#fff'}}>CAREER PERSONALITY MAP</p>
                </div>
              </div>
            </div>
          </div>
          <MccContent />
          <MccContent2 />
          <TextContent2 />
        </Fragment>)
      }
    }</LoginModalContext.Consumer>
  }
}
export default withLayout(IndexPage)
