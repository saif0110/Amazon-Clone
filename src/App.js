import { ThemeProvider, createTheme } from "@mui/material/styles";
import CombinedHeader from "./Layout/Header/Combined Header/CombineHeader";
import CombinedFooter from "./Layout/Footer/Combined Footer/CombinedFooter";
import LanguageTTC from "./Layout/Header/Header Belt/LanguageTTC";

import "./App.css"
import CombinedBody from "./Layout/Body/CombinedBody/CombinedBody";
import { Box } from '@mui/material'
import SignInPage from "./FormUI/Forms/SignInPage";
import SignUpPage from "./FormUI/Forms/SignUpPage";
import InputField from "./FormUI/components/InputField";
import { Provider } from "react-redux";
import store from "./Redux/store";

import CartData from "./Cart/CartData";
import { Route, Routes } from "react-router-dom";
import { Home } from "@mui/icons-material";
import HomePage from "./HomePage";
import CartPage from "./Cart/CartPage";
import SignIn from "./Layout/Footer/SignIn";
import AddressModal from "./PaymentModal/AddressModal";
import AddressDetails from "./FormUI/Forms/AddressDetails";
import PaymentModal from "./PaymentModal/PaymentModal";
import DisplayProductPage from "./Display/DisplayProductPage";
import OrderPage from "./RetunAndOrder/OrderPage";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0F1111'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='cart-page' element={<CartPage />} />
          <Route path='sign-in' element={<SignInPage />} />
          <Route path='sign-up' element={<SignUpPage />} />
          <Route path='return-and-orders' element={<OrderPage />} />
          <Route path='display-product' element={<DisplayProductPage />} />
          <Route path="display-product/address-modal" element={<AddressModal />}/>
          <Route path="display-product/address-modal/pay" element={<PaymentModal />}/>
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
