import React, {Component} from 'react';
// import Link from 'next/link'
import withAffiliatePortal from '../../hocs/affiliate/withAffiliatePortal'
import DashboardDetails from '../../components/AffiliatePortal/DashboardDetails'
class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile-content">
          <div>
              <h2>Affiliate Portal</h2><hr/>
              <DashboardDetails />
              <p> Steps To get your coupon code </p>
              <p>
                1) Verify your email <br/>
                2) Submit the required documents to affiliates@mycareerchoice.global <br/>
                3) An email will be sent to your inbox to notify of a successful verification of the documents <br/>
                4) Email a signed copy of the Terms & Conditions contract attached in the email from step 3 above to affiliates@mycareerchoice.global <br/>
                5) An email will be sent to you to notify you when the contract has been verified <br/>
                6) Create your coupon code and begin marketing <br/>
                7) Profit
              </p>
              {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p> */}
          </div>
        </div>
    }
}
export default withAffiliatePortal(Dashboard, {activePage: '/'})
