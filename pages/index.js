import React, { Component, Fragment } from 'react'

import Nav from '../components/Nav'
import TextContent from '../components/Homepage/TextContent'
import TextContent2 from '../components/Homepage/TextContent2'
import MccContent from '../components/Homepage/MccContent'
import MccContent2 from '../components/Homepage/MccContent2'
import withLayout from '../hocs/withLayout'

import {LoginModalContext} from '../contexts/LoginModalContext'

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
    return (<Fragment>
      <Nav homepage="active"/>
      <TextContent />
      <div className="about">
        <div className="container">
          <h2 className="text-center"><a id="discover" href="">Discover your Ideal career in 15 minutes</a></h2>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <p className="personalityMap">
                My Career Choice MCC is a quick and reliable way of discovering which career best suits your personality.
              </p>
              <p className="personalityMap">
                <ul>
                  <li>
                    Clear Sense of direction.
                  </li>
                  <li>
                    Understand the link between personality style and career success.
                  </li>
                  <li>
                    Results are easy to understand.
                  </li>
                  <li>
                    Makes Career Choice easy.
                  </li>
                  <li>
                    Maximize your natural talent.
                  </li>
                </ul>
              </p>
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
      <style jsx>
      {`
        p.personalityMap{
          color : #fff ;
          font-size: 1.5em ;
          font-weight: normal ;
          margin-bottom: 60px ;
        }
        p.personalityMap ul li{
          font-size: 1em ;
        }
      `}
      </style>
    </Fragment>)
  }
}
export default withLayout(IndexPage)
