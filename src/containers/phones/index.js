import { connect } from 'react-redux'

import Phones from '../../components/phones/';
import { fetchPhones } from '../../actions';

const masStateToPtops = (state) => ({
    phones: state.phones.phones,
})

const mapDispatchToProps = {
    fetchPhones,
}

export default connect(masStateToPtops, mapDispatchToProps)(Phones)
