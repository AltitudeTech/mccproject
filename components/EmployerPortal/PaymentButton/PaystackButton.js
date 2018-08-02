import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import { ApolloConsumer } from 'react-apollo'
import { FIND_COUPON_QUERY } from '../../../lib/graphql/queries'

class PayStack extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text || "Make Payment",
			btnClassName: this.props.btnClassName || "",
			metadata: this.props.metadata || {},
			currency: this.props.currency || "NGN",
			plan: this.props.plan || "",
			quantity: this.props.quantity || "",
			subaccount: this.props.subaccount || "",
			transaction_charge: this.props.transaction_charge || 0,
			bearer: this.props.bearer || "",
			disabled: this.props.disabled || false
		}
	}


	componentDidMount() {
		if(this.props.embed){
			this.payWithPaystack()
		}
	}

	payWithPaystack = ({amount = '', couponId = ''}={}) => {
		// console.log(this.props.coupon);
		let paystackOptions = {
			key: this.props.paystackkey,
			email: this.props.email,
			amount: amount || this.props.amount,
			ref: this.props.reference,
			metadata: {
				price_id: this.props.priceId,
				no_of_uses: this.props.uses,
				coupon_id: couponId || null
			},
			callback: (response) => {
				this.props.callback(response)
			},
			onClose: () => {
				this.props.close()
			},
			currency: this.state.currency,
			plan: this.state.plan,
			quantity: this.state.quantity,
			subaccount: this.state.subaccount,
			transaction_charge: this.state.transaction_charge,
			bearer: this.state.bearer
		}
		if (this.props.embed) {
			paystackOptions.container = "paystackEmbedContainer"
		}

		try {
			//TODO Romove next two lines
			// console.log(paystackOptions);
			const handler = window.PaystackPop.setup(paystackOptions);
			if (!this.props.embed) {
				handler.openIframe();
				// console.log(handler);
			}
		} catch (e) {
			console.log(e);
			this.props.showLoading(false);
		}
	}

	render() {
		return this.props.embed ?
			(
				<div id="paystackEmbedContainer"></div>
			)
			:
			(
				<ApolloConsumer>
					{client => <RaisedButton
						primary={true}
						className={this.state.btnClassName}
						label={this.state.text}
						onClick={async () => {
							this.props.showLoading(true);
							if (this.props.coupon) {
								try {
									const { data : { findCoupon } } = await client.query({
										query: FIND_COUPON_QUERY,
										variables: { coupon : this.props.coupon}
									});
									// console.log(findCoupon);
									if (findCoupon) {
										if (findCoupon.discount > 0 && findCoupon.discount < 100) {
											//apply discount
											const priceToPay = this.props.amount - ((findCoupon.discount/100)*this.props.amount)
											this.payWithPaystack({
												amount: priceToPay,
												couponId: findCoupon._id
											});
											return ;
										}
									}
									this.payWithPaystack();
									return ;
								} catch (e) {
									console.log(e);
								}
							}
							this.payWithPaystack();
						}}
						disabled={this.props.disabled}
					/>}
				</ApolloConsumer>
			)
	}
}

PayStack.propTypes = {
	embed: PropTypes.bool,
	text: PropTypes.string,
	btnClassName: PropTypes.string,
	metadata: PropTypes.object,
	currency: PropTypes.string,
	plan: PropTypes.string,
	quantity: PropTypes.string,
	subaccount: PropTypes.string,
	transaction_charge: PropTypes.number,
	bearer: PropTypes.string,
	reference: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired, //in kobo
	paystackkey: PropTypes.string.isRequired,
	callback: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
	disabled: PropTypes.bool
}

export default PayStack;
