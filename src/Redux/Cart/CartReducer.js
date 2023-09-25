import { ADD_TO_CART, DELETE_FROM_CART } from "./CartActionType"
const intitialState = {
    addedItemToCart : []
}
const CartReducer = (state = intitialState, action)=>{

    switch(action.type){
        case ADD_TO_CART:
            return {
                addedItemToCart : [action.payload, ...state.addedItemToCart]
            }
        case DELETE_FROM_CART:
            return {
                addedItemToCart: state.addedItemToCart.filter( item => item.id !== action.payload)
            }
        default:
            return state
    }
} 



export default CartReducer;