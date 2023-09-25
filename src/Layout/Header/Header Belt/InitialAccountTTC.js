
import {
    Box, Button, FormControl, Typography
} from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
const buttonStyle = {
    bgcolor: "#FCD200", 
    width: "140px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#FCD200"
    },
    textTransform: "none"
}
const IntitailAccountTTC = ()=>{
    const navigate = useNavigate()
    return (
        <Box display={'flex'} justifyContent={'center'} p={1}>
            <FormControl>
                <Button sx={buttonStyle}  onClick={()=>{navigate('/sign-in')}}>Sign In</Button>
                <Typography sx={{fontSize: "11px", paddingTop: "7px"}}>New customer?
                <NavLink to={'/sign-up'}> Start here</NavLink></Typography>
            </FormControl>
        </Box>
    )
}

export default IntitailAccountTTC