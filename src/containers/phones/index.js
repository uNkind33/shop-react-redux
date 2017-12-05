import { connect } from 'react-redux'

import Phones from '../../components/phones/';
import { fetchPhones, loadMorePhones } from '../../actions';

const mapStateToPtops = (state) => ({
    phones: state.phones.phones,
})

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
}

export default connect(mapStateToPtops, mapDispatchToProps)(Phones)
