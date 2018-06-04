import { Component } from 'react'
import withCandidateRegister from '../../components/withCandidateRegister'

class CandidatePage extends Component{
    render(){
        render(
            <div>Create candidate account</div>
        )
    }
}

export default withCandidateRegister(CandidatePage)