import { Component } from 'react'
import withCandidatePortal from '../../components/withCandidatePortal'

class CandidatePage extends Component{
    render(){
        render(
            <div>Welcome candidate</div>
        )
    }
}
export default withCandidatePortal(CandidatePage)