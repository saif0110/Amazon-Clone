import {
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
    Tooltip,
    tooltipClasses,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Divider,
    Input,
    FormControl,
    Select,
    Badge
} from '@mui/material'
import { useState } from 'react';
import SearchBar from './SearchBar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageTTC from './LanguageTTC';
import styled from '@emotion/styled';
import AccountTTC from './AccountTTC';
import IntitailAccountTTC from './InitialAccountTTC';
import CartDetails from './CartDetails';
import { useNavigate } from 'react-router-dom';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const buttonStyle = {
    border: "1px solid #0F1111",
    '&:hover': {
        border: "1px solid white"
    },
    borderRadius: "0px",
    textTransform: "none"
}
const dialogButtonStyle = {
    bgcolor: "#FCD200",
    width: "443px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#FCD200"
    },
    textTransform: "none"
}
const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
        "&::before": {
            backgroundColor: theme.palette.common.white,
            border: "1px solid #999",
        }
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 'none'
    },
}));
const HeaderBelt = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    setTimeout(() => {
        setOpen(false)
    }, 6000)

    const [openDialog, setOpenDialog] = useState(false)

    const handleClickOpen = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const [country, setCountry] = useState("Deliver outside india")
    const handleChangeCountry = (event) => {
        setCountry(event.target.value)
    }
    const handleReturnAndOrderClick = () => {
        navigate('/return-and-orders')
    }

    return (
        <AppBar position="sticky" elevation={0} >
            <Toolbar disableGutters>
                <Box display={'flex'} width="25%">
                    <IconButton size='large' edge="start" color='inherit' aria-label='logo'>
                        <img id="logo" src="data:image/png;base64,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" alt="loading.." width={"100vw"} height={"40px"} />
                    </IconButton>
                    <Button variant='contained' color='primary' sx={{ padding: "5px", ...buttonStyle, width: "12vw" }} onClick={handleClickOpen}>
                        <Box sx={{
                            textAlign: "left",
                        }} display={'flex'}>
                            <Box marginTop={1.2}>
                                <LocationOnOutlinedIcon />
                            </Box>
                            <Box>

                                <Typography variant='body2' component={'div'} sx={
                                    {
                                        fontSize: "12px",
                                        color: "lightgray"

                                    }
                                }>Delivery location</Typography>
                                <Typography variant="h6" component={'div'}
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600"
                                    }}
                                >Choose location</Typography>
                            </Box>
                        </Box>
                    </Button>
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Choose your location"}
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Typography variant='body2'>
                                    Select a delivery loction to see product availibility
                                    and delivery options
                                </Typography>
                                <Button sx={{ marginTop: "12px", ...dialogButtonStyle }}>Sign in to see your address</Button>
                                <Box pt={2}>
                                    <Divider>
                                        <Typography variant='body2'>or enter an indian pincode</Typography>
                                    </Divider>
                                </Box>
                                <Box display={'flex'} pt={2} justifyContent={'space-between'}>
                                    <Input
                                        type='number'
                                        id={'enter-pincode'}
                                        sx={{
                                            width: "350px",
                                            border: "1px solid gray",
                                            borderRadius: "5px",
                                            paddingLeft: "12px",
                                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                                display: "none",
                                            },
                                            "& input[type=number]": {
                                                MozAppearance: "textfield",
                                            },
                                            '&.Mui-focused': {
                                                //   backgroundColor: "rgba(255, 255, 255, 0.09)",
                                                border: "2px solid lightblue"
                                            },
                                        }}
                                        // onFocus={handleDialogInputFocus}
                                        disableUnderline />
                                    <Button variant='outlined'>Apply</Button>
                                </Box>
                                <Box pt={2}>
                                    <Divider>
                                        <Typography variant='body2'>or</Typography>
                                    </Divider>
                                </Box>
                                <Box sx={{ width: 443 }} pt={2}>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={country}

                                            onChange={handleChangeCountry}
                                            sx={{ height: "40px" }}
                                        >
                                            <MenuItem value="Deliver outside india">Deliver outside india</MenuItem>
                                            <MenuItem value="Bangladeh">Bangladesh</MenuItem>
                                            <MenuItem value="Srilanka">Srilanka</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </Box>
                <Box display="flex" justifyContent={'space-between'} width="75%">
                    <SearchBar />

                    <StyledTooltip title={<LanguageTTC />} arrow >
                        <Button sx={{ padding: "10px", ...buttonStyle, width: "8vw" }}
                            variant='contained'
                            startIcon={<img src="https://img.freepik.com/premium-photo/india-national-fabric-flag_113767-1933.jpg?size=626&ext=jpg&ga=GA1.1.1984492667.1694231761&semt=ais" alt="loading.." width={30} height={20} />}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            <Typography variant="h6" component={'div'}
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600"
                                }}
                            >EN</Typography>
                        </Button>
                    </StyledTooltip>

                    {/* ================ */}

                    <StyledTooltip title={<AccountTTC />} arrow placement="bottom-end"
                        onOpen={() => setOpen(false)}
                    >
                        <Button variant='contained' color='primary' 
                        sx={{ width: "14vw", ...buttonStyle }}
                        onClick={()=>{ navigate('/sign-in')}}>
                            <Box sx={{
                                textAlign: "left",
                            }}>
                                <StyledTooltip title={<IntitailAccountTTC />} arrow PopperProps={{
                                    sx: { marginTop: "12px !important" }
                                }}
                                    open={open}
                                >
                                    <Typography variant='body2' component={'div'} sx={
                                        {
                                            fontSize: "12px",
                                            color: "lightgray"

                                        }
                                    }>Hello, sign in</Typography>
                                </StyledTooltip>
                                <Box display={'flex'}>
                                    <Typography variant="h6" component={'div'}
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }}
                                    >Account & Lists</Typography>
                                    <KeyboardArrowDownIcon />
                                </Box>
                            </Box>
                        </Button>
                    </StyledTooltip>
                    {/* ================ */}
                    <Button variant='contained' color='primary' sx={{width:"7.5vw", ...buttonStyle }} onClick={handleReturnAndOrderClick}>
                        <Box sx={{
                            textAlign: "left",
                        }}>
                            <Typography variant='body2' component={'div'} sx={
                                {
                                    fontSize: "12px",
                                    color: "lightgray"

                                }
                            }>Returns</Typography>
                            <Typography variant="h6" component={'div'}
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >& orders</Typography>
                        </Box>
                    </Button>
                    {/* ===================== */}
                    <CartDetails />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderBelt;