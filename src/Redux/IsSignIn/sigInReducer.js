import { SIGN_IN, SIGN_UP } from "./signInType";

const initialValue = {
    isSignedIn: false,
    userDetail : {}
}

export const signInUpReducer = (state = initialValue, action)=>{
    switch(action.type){
        case SIGN_IN:
            return {
                isSignedIn: action.payload
            }
        case SIGN_UP:
            return {
                ...state,
                userDetail: action.payload
            }
        default: return state
    }
}