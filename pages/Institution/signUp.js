import { Component } from 'react'
import withCandidateRegister from '../../hocs/candidate/withCandidateRegister'

class CandidatePage extends Component{
    render(){
        return(
            <div>Create institution account</div>
        )
    }
}

export default withCandidateRegister(CandidatePage)