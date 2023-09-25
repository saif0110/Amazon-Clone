import { ADDRESS_DETAIL } from "./AddressType"

export const addressAction = (address)=>{
    return {
        type: ADDRESS_DETAIL,
        payload: address
    }
}