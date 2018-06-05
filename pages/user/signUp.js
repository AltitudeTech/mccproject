import { Component } from 'react'
import withCandidateRegister from '../../components/HOCS/candidate/withCandidateRegister'

class CandidatePage extends Component{
    render(){
        return(
            <div>Create candidate account</div>
        )
    }
}

export default withCandidateRegister(CandidatePage)