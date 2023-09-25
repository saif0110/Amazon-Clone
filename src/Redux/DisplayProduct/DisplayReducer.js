import { DISPLAY_PRODUCT } from "./DisplayType"

const initialValue = {
    productToDsplay: -1
}

export const displayReducer = (state = initialValue, action)=>{
    switch(action.type){
        case DISPLAY_PRODUCT: 
            return {
                productToDsplay: action.payload
            }
        default: return state
    }
}