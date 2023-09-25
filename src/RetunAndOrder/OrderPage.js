import { useSelector } from "react-redux";
import CombinedFooter from "../Layout/Footer/Combined Footer/CombinedFooter"
import CombinedHeader from "../Layout/Header/Combined Header/CombineHeader"
import OrderDetail from "./OrderDetail";
import EmptyOrder from "./EmptyOrder";

const OrderPage = () => {
    const buyedProducts = useSelector(state => state.buyedItem.listOfBuyeditem)
    const isDataAvailable = buyedProducts.length === 0 ? false : true;
    return isDataAvailable ? (
        <>
            <CombinedHeader />
            <OrderDetail />
            <CombinedFooter />
        </>
    ) : (
        <>
            <CombinedHeader />
            <EmptyOrder />
            <CombinedFooter />
        </>
    )
}

export default OrderPage