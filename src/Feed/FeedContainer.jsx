import Feed from './Feed.jsx';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => {
	return {};
};

export default compose(connect(mapStateToProps, {}))(Feed);
