import { Component } from 'react';
import PaystackButton from 'react-paystack';
import { Mutation } from 'react-apollo';

import { CREATE_PAYMENT_MUTATION } from '../../../lib/backendApi/mutations'
import { PAYMENT_PAGE_QUERY } from '../../../lib/backendApi/queries'

const PAYSTACK_PUBLIC_KEY = 'pk_test_43f8936830aea3a5b9838c4893b16c9f1e7dee34';

export default class PaymentButton extends Component {

	state = {
		key: PAYSTACK_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
		email: this.props.email,  // customer email
		amount: this.props.amount //equals NGN100,
	}

	callback = (response, runMutation) => {
		// console.log(response); // card charged successfully, get reference here
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
    return (
      <div>
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
								text="Pay now"
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
						</p>
					)}
				</Mutation>
      </div>
    );
  }
}
