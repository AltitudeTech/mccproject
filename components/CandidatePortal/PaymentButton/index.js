import { Component } from 'react';
import PaystackButton from 'react-paystack';
import { Mutation } from 'react-apollo';

import { CREATE_PAYMENT_MUTATION } from '../../../lib/graphql/mutations'
import { PAYMENT_PAGE_QUERY } from '../../../lib/graphql/queries'

// const PAYSTACK_PUBLIC_KEY = 'pk_test_43f8936830aea3a5b9838c4893b16c9f1e7dee34';
const PAYSTACK_PUBLIC_KEY = 'pk_live_ec169fc011a4a8a16544c851b69a5c89571f46a7 ';

export default class PaymentButton extends Component {

	state = {
		key: PAYSTACK_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
		email: this.props.email,  // customer email
		amount: this.props.amount, //equals NGN100,
		message: ''
	}

	callback = (response, runMutation) => {
		// console.log(response); // card charged successfully, get reference here
		this.setState({message: ''})
		if (response.reference) {//successfully
			runMutation({
				variables: {
					paystackReference: response.reference
				}
			})
		}
	}

	close = () => {
		console.log("Payment closed");
		this.setState({message: ''})
	}

	getReference = () => {
		//you can put any unique reference implementation code here
		let text = "";
		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

		for( let i=0; i < 15; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	onMutationCompleted = (cache, { data: { candidateFindOrCreatePaymentRecord } }) => {
		// Read the data from our cache for this query.
		const data = cache.readQuery({ query: PAYMENT_PAGE_QUERY });

		// Add the new education to PAYMENT_PAGE_QUERY
		data.viewerCandidate.candidate.payments = [
			candidateFindOrCreatePaymentRecord,
			...data.viewerCandidate.candidate.payments
		];

		// Write our data back to the cache.
		cache.writeQuery({ query: PAYMENT_PAGE_QUERY, data });
		//add payment to top of candidate payments
	}

  render() {
		const {message} = this.state;
    return (
      <div disabled={true} onClick={()=>this.setState({message: 'Contacting payment server please wait!'})}>
        <script src="https://js.paystack.co/v1/inline.js"></script>
				<Mutation mutation={CREATE_PAYMENT_MUTATION}
					update={this.onMutationCompleted}
					onError={(error) => {
          	console.log(error)
        	}}>
					{(candidateFindOrCreatePaymentRecord, {data, error}) => (
						<p>
							{error && <p>:( There was an issue check the logs</p>}
							<PaystackButton
								text="Pay Now"
								class="payButton"
								callback={(response)=>{this.callback(response, candidateFindOrCreatePaymentRecord)}}
								close={this.close}
								disabled={false}
								embed={false}
								reference={this.getReference()}
								email={this.state.email}
								amount={this.state.amount}
								paystackkey={this.state.key}
							/>
							{message && <p className="payment-message">{message}</p>}
						</p>
					)}
				</Mutation>
				<style jsx>{`
					.payment-message {
						color: #3c763d;
					}
				`}</style>
      </div>
    );
  }
}
