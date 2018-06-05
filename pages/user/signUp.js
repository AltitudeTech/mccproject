import { Component } from 'react'
import withCandidateRegister from '../../components/withCandidateRegister'

class CandidatePage extends Component{
    render(){
        return(
            <div>Create candidate account</div>
        )
    }
}

export default withCandidateRegister(CandidatePage)