import Main from './Main.jsx';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => {
	return {
		announcements_house: state.feed.house.announcements,
		announcements_stray: state.feed.stray.announcements,
	};
};

export default compose(connect(mapStateToProps, {}))(Main);
