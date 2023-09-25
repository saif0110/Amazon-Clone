import { BUYED_ITEM_DETAIL, DELETE_BUYED_ITEM } from "./BuyedItemType";

export const buyItemAction  = (productDetail)=>{
    return {
        type: BUYED_ITEM_DETAIL,
        payload: productDetail
    }
}
export const deleteByedItem  = (id)=>{
    return {
        type: DELETE_BUYED_ITEM,
        payload: id
    }
}