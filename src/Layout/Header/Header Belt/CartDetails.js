import { Badge, Box, Button, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const badgeStyle = {
    "& .MuiBadge-badge": {
        fontSize: "16px",
        fontWeight: "bold",
        color: 'orange',
        backgroundColor: 'transparent',
    }
}
const buttonStyle = {
    border: "1px solid #0F1111",
    '&:hover': {
        border: "1px solid white"
    },
    borderRadius: "0px",
    textTransform: "none"
}
const CartDetails = () => {
    const navigate = useNavigate();
    const numberOfAddedItemToCart = useSelector(state => state.cart.addedItemToCart.length)
    return (
        <>
            <Button variant='contained' color='primary'
                sx={{...buttonStyle, width: "7vw"}}
                onClick={() => { navigate('/cart-page') }}>
                <Box sx={{
                    textAlign: "left",
                }} display="flex">
                    <Badge sx={badgeStyle} badgeContent={numberOfAddedItemToCart} color="success" showZero
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    <Typography variant="h6" component={'div'}
                        sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                        }}
                    >Carts</Typography>
                </Box>
            </Button>
        </>
    )
}

export default CartDetails