import { FETCH_API_REQUEST } from "./APIActionType";
import { FETCH_API_SUCCESS } from "./APIActionType";
import { FETCH_API_FAILURE } from "./APIActionType";
import axios from 'axios'
const fetchAPIRequest = ()=>{
    return {
        type: FETCH_API_REQUEST
    }
}
const fetchAPISuccess = (value)=>{
    return {
        type: FETCH_API_SUCCESS,
        payload: value
    }
}
const fetchAPIFailure = (error)=>{
    return {
        type: FETCH_API_FAILURE,
        payload: error
    }
}

const fetchAPI = ()=>{
    return function (dispatch){
        dispatch(fetchAPIRequest());
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            const value = response.data;
            console.log("response: ", value);
            dispatch(fetchAPISuccess(value))
        })
        .catch((error) => {
            dispatch(fetchAPIFailure(error.message))
        })

    }
}

export { fetchAPIRequest, fetchAPISuccess, fetchAPIFailure }
export default fetchAPI