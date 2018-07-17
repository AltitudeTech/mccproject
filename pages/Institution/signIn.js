import { Component } from 'react'
import withCandidateLogin from '../../hocs/candidate/withCandidateLogin'

class CandidatePage extends Component{
    render(){
        return(
            <div>Sign In institution</div>
        )
    }
}

export default withCandidateLogin(CandidatePage)