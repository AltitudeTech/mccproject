import { Component } from 'react'
import withCandidatePortal from '../../components/withCandidatePortal'

class CandidatePage extends Component{
    render(){
        return(
            <div>Welcome candidate</div>
        )
    }
}

export default withCandidatePortal(CandidatePage)