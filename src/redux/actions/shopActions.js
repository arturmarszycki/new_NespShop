const DB = 'http://localhost:3000/shop';

const GET_DATA = 'GET_DATA';
const UPDATE_SHOP_ITEM = 'UPDATE_SHOP_ITEM';
const fetchData = () => dispatch => {
    fetch(DB).then(response => {
        return response.json();
    }).then(result => {
        dispatch({type: GET_DATA, result});
    }).catch(error => {
        console.log(error);
    });
};
const updateShopItem = item => ({type: UPDATE_SHOP_ITEM, item});

export {GET_DATA, UPDATE_SHOP_ITEM, fetchData, updateShopItem};