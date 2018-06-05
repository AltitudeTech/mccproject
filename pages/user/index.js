import { Component } from 'react'
import withCandidatePortal from '../../components/HOCS/candidate/withCandidatePortal'

class CandidatePage extends Component{
    render(){
        return(
            <div>Welcome candidate</div>
        )
    }
}
export default withCandidatePortal(CandidatePage)