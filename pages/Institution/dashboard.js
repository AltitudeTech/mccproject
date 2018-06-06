import { Component } from 'react'
import withInstitutionPortal from '../../components/HOCS/institution/withInstitutionPortal'

class CandidatePage extends Component{
    render(){
        return(
            <div>Welcome institution</div>
        )
    }
}
export default withInstitutionPortal(CandidatePage)