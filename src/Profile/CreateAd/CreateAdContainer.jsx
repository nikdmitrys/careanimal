import CreateAd from './CreateAd'
import { connect } from 'react-redux'
import { compose } from 'redux'

let mapStateToProps = ( state ) => {
    return {}
}

export default compose( connect( mapStateToProps, {} ), )( CreateAd )
