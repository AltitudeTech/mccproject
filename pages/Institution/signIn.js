import { Component } from 'react'
import withCandidateLogin from '../../components/HOCS/candidate/withCandidateLogin'

class CandidatePage extends Component{
    render(){
        return(
            <div>Sign In institution</div>
        )
    }
}

export default withCandidateLogin(CandidatePage)