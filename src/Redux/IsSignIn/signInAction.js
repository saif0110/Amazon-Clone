import { SIGN_IN, SIGN_UP } from "./signInType"


export const signInAction = (flag)=>{
    return {
        type: SIGN_IN,
        payload: flag
    }
}
export const signUpAction = (value)=>{
    return {
        type: SIGN_UP,
        payload: value
    }
}