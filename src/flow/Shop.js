import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {fetchData, updateShopItem} from '../redux/actions/shopActions';

const mapState = state => ({
    shop: state.shop,
    customerData: state.customer
});
const mapDispatch = dispatch => ({
    getData: () => dispatch(fetchData()),
    updateShop: item => dispatch(updateShopItem(item))
});

export default connect(mapState, mapDispatch)(Layout);