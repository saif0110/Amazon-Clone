import { DISPLAY_PRODUCT } from "./DisplayType"

export const displayProduct = (id)=>{
    return {
        type: DISPLAY_PRODUCT,
        payload: id
    }
}