import { useSelector } from "react-redux";
import CombinedFooter from "../Layout/Footer/Combined Footer/CombinedFooter"
import CombinedHeader from "../Layout/Header/Combined Header/CombineHeader"
import CartData from "./CartData";
import EmptyCart from "./EmptyCart"
const CartPage = () => {
    const cartItems = useSelector(state => state.cart.addedItemToCart);
    const isDataAvailable = cartItems.length === 0 ? false : true;
    return isDataAvailable ? (
        <>
            <CombinedHeader />
            <CartData />
            <CombinedFooter />
        </>
    ) : (
        <>
            <CombinedHeader />
            <EmptyCart />
            <CombinedFooter />
        </>
    )
}

export default CartPage