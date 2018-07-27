import { Component } from 'react';
import { Mutation } from 'react-apollo'

import RaisedButton from 'material-ui/RaisedButton';

import { CREATE_COUPON_MUTATION } from '../../../lib/graphql/mutations'
import { HOME_VIEWER_AFFILIATE_QUERY } from '../../../lib/graphql/queries'
const style = {
  margin: '6px'
}
export default class SaveCouponButton extends Component{
  onCreateError = (error) => {
    // If you want to send error to external service?
    console.log(error)
    if (error.graphQLErrors.length==0)
      this.props.showError("Something went wrong while contacting the server")

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `coupon already exists`:
        this.props.showError("coupon already exists")
        break;
        case `your coupon must be between six(6) and ten(10) characters in length`:
        this.props.showError("your coupon must be between six(6) and ten(10) characters in length")
        break;
        default:
        this.props.showError("Something went wrong while contacting the server")
      }
    })
  }

  update(){

  }

  doLogin = (event, runMutation) => {
    event.preventDefault()
    event.stopPropagation()

    const { coupon } = this.props;

    runMutation({
      variables: {
        coupon
      }
    })
  }

  render(){
      return <Mutation mutation={CREATE_COUPON_MUTATION}
        onCompleted={()=>this.props.setModalOpen(false)}
        onError={this.onCreateError}
        update={(cache, { data: { affiliateCreateCoupon } }) => {
        const { viewerAffiliate } = cache.readQuery({ query: HOME_VIEWER_AFFILIATE_QUERY });
        viewerAffiliate.affiliate.coupon = affiliateCreateCoupon;
        cache.writeQuery({
          query: HOME_VIEWER_AFFILIATE_QUERY,
          data: { viewerAffiliate }
        });
      }}>
        {(runMutation)=>(
          <RaisedButton
            label="Save"
            style={style}
            backgroundColor='#0c6053'
            labelColor="white"
            onClick={e=>this.doLogin(e, runMutation)}
          />
        )}
      </Mutation>
  }
}
