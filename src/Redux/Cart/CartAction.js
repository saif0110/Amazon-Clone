import { ADD_TO_CART } from "./CartActionType"
import { DELETE_FROM_CART } from "./CartActionType"

export const cartAction = (productDetail)=>{
    return {
        type: ADD_TO_CART,
        payload: productDetail
    }
}

export const deleteItemFromCart = (id)=>{
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}