import { Box, Drawer, Typography, IconButton, Button, Avatar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const arrowButtonStyle = {
    minWidth: "0px", 
    minHeight: "0px", 
    width: "340px", 
    justifyContent: "space-between", 
    paddingLeft: "0px", 
    paddingRight: "5px", 
    paddingTop: "7px", 
    paddingBottom :"7px"
} 
export const AllOptionsDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
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
        <>
            <Button sx={buttonStyle} onClick={() => setIsDrawerOpen(true)}>
                <IconButton size="large" edge="start" aria-label="logo" color="inherit" >
                    <MenuIcon/>
                </IconButton>
                All
            </Button>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box width={380} role="presentation" >
                    <Box sx={{ bgcolor: "#37474f", color: "white" }} padding={1.2}>
                        <Box display={'flex'} paddingLeft={3}>
                            {/* <Avatar > */}
                                {/* <IconButton size="large"> */}
                                    <AccountCircleIcon style={{fontSize: "45px"}}/>
                                {/* </IconButton> */}
                            {/* </Avatar> */}
                            <Typography variant="h5" component={'div'} paddingLeft={1.5}>
                                Hello, sign in
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ borderBottom: "2px solid lightgray" }}>
                            <Box padding={4}>
                                <Typography variant="h6" sx={{ fontWeight: "550" }}>Trending</Typography><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} >Best Sellers</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} >New Release</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} >Movers and Shakers</Button>
                            </Box>
                        </Box>
                        <Box sx={{ borderBottom: "2px solid lightgray" }}>
                            <Box padding={4}>
                                <Typography variant="h6" sx={{ fontWeight: "550" }}>Digital Content and Devices</Typography><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} >Amazon miniTv- Free entertainment</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Echo & Alexa</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Fire Tv</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Kindle E-Readers & eBooks</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Audible Audiobooks</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Amazon Prime Video</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Amazon Prime Music</Button>
                            </Box>
                        </Box>
                        <Box sx={{ borderBottom: "2px solid lightgray" }}>
                            <Box padding={4}>
                                <Typography variant="h6" sx={{ fontWeight: "550" }}>Shop By Category</Typography><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>} >Mobile Computers</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>} >TV, Appliances, Electronics</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Men's Fashion</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>}>Women's Fashion</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={{...arrowButtonStyle, width: "100px"}} endIcon={<KeyboardArrowDownIcon/>}>See All</Button>
                            </Box>
                        </Box>
                        <Box sx={{ borderBottom: "2px solid lightgray" }}>
                            <Box padding={4}>
                                <Typography variant="h6" sx={{ fontWeight: "550" }}>Programs & Features</Typography><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} endIcon={<KeyboardArrowRightIcon/>} >Gift Cards & Mobile Recharge</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle}>Amazon Launchpad</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle}>Flight Tickets</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle}>Buy More Save More</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={{...arrowButtonStyle, width: "100px"}} endIcon={<KeyboardArrowDownIcon/>}>See All</Button>
                            </Box>
                        </Box>
                        <Box sx={{ borderBottom: "2px solid lightgray" }}>
                            <Box padding={4}>
                                <Typography variant="h6" sx={{ fontWeight: "550" }}>Help & Setting</Typography><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} >Your Account</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle} >Customer Service</Button><Typography variant="body2">&nbsp;</Typography>
                                <Button sx={arrowButtonStyle}>Sign In</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}