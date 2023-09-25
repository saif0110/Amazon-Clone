import { Stack, Button } from '@mui/material'
import { AllOptionsDrawer } from './AllOptionsDrawer'
const HeaderBanner = () => {
    const buttonStyle = {
        color: "white",
        border: "1px solid #37474f",
        '&:hover': { 
            border: "1px solid white" 
        },
        borderRadius: "0px",
        fontSize: "14px",
        textTransform: "none"
    }
    return (
        <Stack direction="row" sx={{ bgcolor: "#37474f" }} flexGrow={1} p={0} height={40}>
            <AllOptionsDrawer />
            <Button sx={buttonStyle} varinat='contained'>Amazon miniTv</Button>
            <Button sx={buttonStyle} varinat='contained' >Sell</Button>
            <Button sx={buttonStyle} varinat='contained'>Best Sellers</Button>
            <Button sx={buttonStyle} varinat='contained' >Mobiles</Button>
            <Button sx={buttonStyle} varinat='contained' >Today's Deals</Button>
            <Button sx={buttonStyle} varinat='contained' >New Release</Button>
            <Button sx={buttonStyle} varinat='contained' >Customer Service</Button>
            <Button sx={buttonStyle} varinat='contained' >Prime</Button>
            <Button sx={buttonStyle} varinat='contained' >Electronics</Button>
        </Stack>
    )
}

export default HeaderBanner