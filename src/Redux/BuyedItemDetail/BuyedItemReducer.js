import { BUYED_ITEM_DETAIL, DELETE_BUYED_ITEM } from "./BuyedItemType"

const initialValue = {
    listOfBuyeditem: []
}

export const buyedItemReducer = (state = initialValue, action)=>{
    switch(action.type){
        case BUYED_ITEM_DETAIL:
            return {
                listOfBuyeditem: [action.payload, ...state.listOfBuyeditem]
            }
        case DELETE_BUYED_ITEM: 
        return {
            listOfBuyeditem: state.listOfBuyeditem.filter(item => item.id !== action.payload)
        }
        default: return state
    }
}