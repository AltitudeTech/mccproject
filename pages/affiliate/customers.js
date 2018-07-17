import React, {Component} from 'react';
// import Link from 'next/link'
import withAffiliatePortal from '../../hocs/affiliate/withAffiliatePortal'
import CustomersTable from '../../components/AffiliatePortal/CustomersTable'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile-content">
          <div>
              <h2>Customers Page</h2><hr/>

              <CustomersTable />
          </div>
        </div>
    }
}
export default withAffiliatePortal(Dashboard, {activePage: '/customers'})
