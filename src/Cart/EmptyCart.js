import { useNavigate } from 'react-router'
import emptyCartLogo from '../assets/emptyCart.png'
const { Box, Typography, Button } = require("@mui/material")
const buttonStyle = {
    bgcolor: "#FCD200",
    width: "200px",
    height: "32px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#fbc02d"
    },
    fontSize: "13px",
    textTransform: "none",
}
const EmptyCart = ()=>{
    const navigate = useNavigate()
    return (
        <Box display="flex" justifyContent={'center'} p={15} >
            <Box>
                <img src={emptyCartLogo} alt="empty-cart"/>
            </Box>
            <Box width="320px" textAlign={'center'}>
                <Typography sx={{fontSize: "20px", fontWeight: "bold"}}>Your cart feels lonely</Typography>
                <Typography sx={{fontSize: "14px"}}>Your shoppign cart lives to serve. Give it purpose- 
                fill it with books, electronics, videos etc, and make it happy.</Typography>
                <Button sx={buttonStyle} onClick={()=> navigate('/')}>Continue Shopping</Button>
            </Box>

        </Box>
    )
}
export default EmptyCart