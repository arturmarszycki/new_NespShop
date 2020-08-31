// import {UPDATE_CART} from '../actions/cartActions';
//
// const cart = (state = [], action) => {
//     switch (action.type) {
//         case UPDATE_CART:
//             let updatedCart = state.filter(element => {
//                 return element.id_shop_product !== action.item.id_shop_product;
//             });
//             if (action.item.qty !== 0) {
//                 updatedCart = [...updatedCart, action.item];
//             }
//             return state = updatedCart;
//         default:
//             return state;
//     }
// }
//
// export default cart;