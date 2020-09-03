import {connect} from 'react-redux';
import Customer from '../components/Customer';
import {submitCustomerData} from '../redux/actions/customerActions';

const mapState = state => ({
    customerData: state.customer
});
const mapDispatch = dispatch => ({
    submitCustomerData: data => dispatch(submitCustomerData(data))
});

export default connect(mapState, mapDispatch)(Customer);