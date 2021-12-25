import Feed from './Feed.jsx'
import { connect } from 'react-redux'
import { compose } from 'redux'

let mapStateToProps = ( state ) => {
    return {}
}

export default compose( connect( mapStateToProps, {} ), )( Feed )
