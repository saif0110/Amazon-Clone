import { NavLink } from 'react-router-dom'

import {
    Box, Button, FormControl, Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
const buttonStyle = {
    bgcolor: "#FCD200", 
    width: "240px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#FCD200"
    },
    textTransform: "none"
}
const SignIn = ()=>{
    const navigate = useNavigate()
    return (
        <Box display={'flex'} justifyContent={'center'} p={4} textAlign={'center'}
        >
            <FormControl>
                <Typography sx={{fontSize: "13px", paddingBottom: "7px"}}>See personalized recommendations</Typography>
                <Button sx={buttonStyle} onClick={()=>{navigate('/sign-in')}}>Sign In</Button>
                <Typography sx={{fontSize: "11px", paddingTop: "7px"}}>New customer? 
                <NavLink to={'/sign-up'}> Start here</NavLink></Typography>
            </FormControl>
        </Box>
    )
}

export default SignIn;