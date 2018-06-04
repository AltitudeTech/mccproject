import React, { Component, Fragment } from 'react'

import Nav from '../components/Nav'
import TextContent from '../components/Homepage/TextContent' 
import TextContent2 from '../components/Homepage/TextContent2' 
import MccContent from '../components/Homepage/MccContent' 
import MccContent2 from '../components/Homepage/MccContent2' 
import withLayout from '../components/withLayout'


class IndexPage extends Component {
  stlyes = {
    color : 'white'
  }
  render(){
    return <Fragment>
      <Nav homepage="active" />
      <TextContent />
      <div className="about">
        <div className="container">
          <h2 className="text-center"><a id="discover" href="">Discover your Ideal career in 15 minutes</a></h2>
          <br/>
          <div className="row">
            <p style={{color : '#fff'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <br/>
            <p style={{color : '#fff'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
      </div>
      <MccContent />
      <MccContent2 />
      <TextContent2 />   
    </Fragment>
  }
}
export default withLayout(IndexPage)
