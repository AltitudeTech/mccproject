import { Component } from 'react'
import withCandidateLogin from '../../components/withCandidateLogin'

class CandidatePage extends Component{
    render(){
        render(
            <div>Sign In candidate</div>
        )
    }
}

export default withCandidateLogin(CandidatePage)