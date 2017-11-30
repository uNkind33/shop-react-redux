import { connect } from 'react-redux'

import Phones from '../../components/phones/';
import { fetchPhones } from '../../actions';

const mapDispatchToProps = {
    fetchPhones,
}

export default connect(null, mapDispatchToProps)(Phones)
