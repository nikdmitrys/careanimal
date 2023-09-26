import Header from './Header.jsx';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => {
	return {};
};

export default compose(connect(mapStateToProps, {}))(Header);
