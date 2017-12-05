import { connect } from 'react-redux';

import Phone from '../../components/phone';
import { fetchPhoneById } from '../../actions';


const mapDispatchToProps = {
    fetchPhoneById
}

export default connect(null, mapDispatchToProps)(Phone)