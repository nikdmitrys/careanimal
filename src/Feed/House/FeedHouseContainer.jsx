import Feed from './House.jsx';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => {
	return { announcements: state.feed.house.announcements };
};

export default compose(connect(mapStateToProps, {}))(Feed);
