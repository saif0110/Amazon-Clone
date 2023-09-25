import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";
import APIReducer from "./FetchAPI/APIReducer";
import { displayReducer } from "./DisplayProduct/DisplayReducer";
import { buyedItemReducer } from "./BuyedItemDetail/BuyedItemReducer";
import { addressReducer } from "./Address/AddressReducer";
import { signInUpReducer } from './IsSignIn/sigInReducer';

const rootReducer = combineReducers({
    cart: CartReducer,
    API: APIReducer,
    display: displayReducer,
    buyedItem: buyedItemReducer,
    address: addressReducer,
    signInUp: signInUpReducer
})

export default rootReducer