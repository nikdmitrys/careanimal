import Feed from './Stray.jsx'
import { connect } from 'react-redux'
import { compose } from 'redux'

let mapStateToProps = ( state ) => {
    return { announcements: state.feed.stray.announcements}
}

export default compose( connect( mapStateToProps, {} ), )( Feed )
