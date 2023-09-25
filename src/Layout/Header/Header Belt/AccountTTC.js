import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Typography
} from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'

const fontStyle= {
    fontSize: "13px"
}

const buttonStyle = {
    bgcolor: "#FCD200", 
    width: "240px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#FCD200"
    }
}

const AccountTTC = ()=>{
    const navigate = useNavigate()
    return (
        <Box width={400}>
            <Box display={'flex'} sx={{borderBottom: "1px solid lightgray", padding: "12px"}} justifyContent={'center'}>
                <FormControl>
                    <Button sx={buttonStyle} variant='contained' onClick={()=>{navigate('/sign-in')}}>Sign In</Button>
                    <FormHelperText sx={{textAlign: "center"}}>New Custome?
                    <NavLink to={'/sign-up'}> Start here</NavLink></FormHelperText>
                </FormControl>
            </Box>
            <Box display={'flex'}>
                <Box sx={{paddingTop:"12px", paddingLeft: "12px", paddingRight: "70px"}}>
                    <Typography sx={{fontSize: "16px", fontWeight: "bold"}}>Your Lists</Typography>
                    <Typography sx={fontStyle} >Create a Wish List</Typography>
                    <Typography sx={fontStyle}>Wish from Any Website</Typography>
                    <Typography sx={fontStyle}>Baby Wishlists</Typography>
                    <Typography sx={fontStyle}>Discover Your Style</Typography>
                    <Typography sx={fontStyle}>Explore Showroom</Typography>
                </Box>
                <Box sx={{paddingTop: "12px", paddingBottom: "12px" ,paddingLeft: "12px", borderLeft: "1px solid lightgray"}}>
                    <Typography sx={{fontSize: "16px", fontWeight: "bold"}}>Your Account</Typography>
                    <Typography sx={fontStyle}>Your Account</Typography>
                    <Typography sx={fontStyle}>Your Oredrs</Typography>
                    <Typography sx={fontStyle}>Your Wish List</Typography>
                    <Typography sx={fontStyle}>Your Recommendations</Typography>
                    <Typography sx={fontStyle}>Your Prime Membership</Typography>
                    <Typography sx={fontStyle}>Your Prime Video</Typography>
                    <Typography sx={fontStyle}>Your Subscribe & Save Items</Typography>
                    <Typography sx={fontStyle}>Memberships & Subscriptions</Typography>
                    <Typography sx={fontStyle}>Your Seller Account</Typography>
                    <Typography sx={fontStyle}>Manage Your Account and Devices</Typography>
                    <Typography sx={fontStyle}>Your Free Amazon Business Account</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AccountTTC