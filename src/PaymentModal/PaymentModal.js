import {
    Box,
    Typography,
    Stack,
    Divider,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Grid,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material'
import flower from '../assets/congratulation.jpg'
import amazonLogo from '../assets/amazon-logo.png'
import LockIcon from '@mui/icons-material/Lock';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const buttonStyle = {
    bgcolor: "#FCD200",
    height: "32px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#fbc02d"
    },
    fontSize: "13px",
    textTransform: "none",
}

const PaymentModal = () => {
    const navigate = useNavigate()
    const addressDetail = useSelector(state => state.address.addressDetail)
    const itemDetail = useSelector(state => state.buyedItem.listOfBuyeditem[0])
    const [open, setOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [buyNowLink, setBuyNowLink] = useState(false)
    const handleRadioChange = (event) => {
        setIsChecked(event.target.value)
    }
    const handleClose = () => {
        setOpen(false)
        setBuyNowLink(true)
    }
    return (
        <Box sx={{ bgcolor: "#f5f5f5", margin: "0px", padding: "0px" }}>
            <Box display="flex" justifyContent={'space-around'} p={1} sx={{ border: "1px solid lightgray" }}>
                <img src={amazonLogo} alt="amazon-logo" width={'100px'} height={'60px'} />
                <Typography sx={{ fontSize: "30px" }}>Checkout</Typography>
                <LockIcon sx={{ color: "#9e9e9e", paddingTop: "10px" }} />
            </Box>
            <Box display="flex" pl={12}>
                <Box width={'70vw'}>
                    <Box p={2} display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>1 Delivery Address</Typography>
                        <Box maxWidth={'300px'}>
                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>{addressDetail.fullName}</Typography>
                            <Typography sx={{ fontSize: "15px" }}>{`${addressDetail.street} ${addressDetail.landmark} ${addressDetail.city} ${addressDetail.state} ${addressDetail.pin}`}</Typography>
                        </Box>
                        <NavLink onClick={()=> navigate(-1)}>Change</NavLink>
                    </Box>
                    <Divider />
                    <Box>
                        <Box pt={2} pb={2} pl={2}>
                            <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#c45500" }}>2 Select a payment method</Typography>
                            <Box sx={{ border: "1px solid lightgray", borderRadius: "10px" }} ml={2}>
                                <Box p={2}>
                                    <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Availabele payment method only</Typography>
                                    <Divider />
                                    <FormControl>
                                        <FormControlLabel value="cash-on-delivery" control={<Radio checked={isChecked} onChange={handleRadioChange} />} label="Cash on Delivery/Pay on Delivery" />
                                    </FormControl>
                                </Box>
                                <Divider />
                                <Box p={2}>
                                    <Button sx={buttonStyle} onClick={() => { setOpen(true) }} disabled={!isChecked}>Make an order</Button>
                                    {buyNowLink ? <NavLink to={'/'}> Buy More</NavLink> : false}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Divider />
                    <Box p={2}>
                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>3 Offers</Typography>
                    </Box>
                    <Divider />
                    <Box p={2}>
                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>4 Items and delivery</Typography>
                    </Box>
                    <Divider />
                    <Box pt={2}>
                        <Typography sx={{ fontSize: "12px" }} gutterBottom>
                            Need help? Check our <NavLink>help pages or contact us</NavLink>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }} gutterBottom>
                            When your order is placed, we'll send you an e-mail message
                            acknowledging receipt of your order. If you choose to pay using
                            an electronic payment method (credit card, debit card or net
                            banking), you will be directed to your bank's website to complete
                            your payment. Your contract to purchase an item will not be
                            complete until we receive your electronic payment and dispatch
                            your item. If you choose to pay using Pay on Delivery (POD), you
                            can pay using cash/card/net banking when you receive your item.
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }} gutterBottom>
                            See Amazon.in's <NavLink>Return Policy.</NavLink>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }} gutterBottom>
                            Need to add more items to your order? Continue shopping on the <NavLink> Amazon.in homepage.</NavLink>
                        </Typography>
                    </Box>
                </Box>
                <Box width={'30vw'}>
                    <Box width={'290px'} ml={2} mt={2}>
                        <Box sx={{ border: "1px solid lightgray", borderRadius: "10px" }}>
                            <Box m={2.5}>
                                <Button sx={{ ...buttonStyle, fontWeight: "normal", width: "248px", marginBottom: "7px" }}>Use this address</Button>
                                <Typography sx={{ fontSize: "12px", textAlign: "center" }} gutterBottom>
                                    Choose a shipping address and payment method to calculate shipping, handling and tax.
                                </Typography>
                                <Divider />
                                <Box>
                                    <Typography sx={{ fontSize: "18px", fontWeight: "bold", paddingTop: "12px", paddingBottom: "12px" }}>
                                        Order Summary
                                    </Typography>
                                    <Box pb={.5}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography sx={{ fontSize: "12px" }}>Items:</Typography>
                                            <Typography sx={{ fontSize: "12px" }}>{`$${itemDetail.price * itemDetail.qty}`}</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography sx={{ fontSize: "12px" }}>Delivery:</Typography>
                                            <Typography sx={{ fontSize: "12px" }}>{'$2'}</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography sx={{ fontSize: "12px" }}>Total:</Typography>
                                            <Typography sx={{ fontSize: "12px" }}>{`$${(itemDetail.price * itemDetail.qty) + 2}`}</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography sx={{ fontSize: "12px" }}>Promotion Applied:</Typography>
                                            <Typography sx={{ fontSize: "12px" }}>{(itemDetail.price * itemDetail.qty) >= 50 ? `-$2` : `--`}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box pt={1} pb={1}>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#c45500" }}>Order Total:</Typography>
                                        <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#c45500" }}>{`$${(itemDetail.price * itemDetail.qty) + 2 - ((itemDetail.price * itemDetail.qty) >= 50 ? 2 : 0)}`}</Typography>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>
                            <Divider />
                            <Box p={2.5}>
                                <Typography sx={{ fontSize: "12px", color: "blue" }}>
                                    <NavLink>How are delivery costs calculated?</NavLink>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent style={{ height: "200px", display: "flex", alignItems: "center" }}>
                    <Box textAlign={'center'}>
                        <img src={flower} alt='congrtulations' width={'100px'} height={'100px'} />
                        <Typography sx={{ fontSize: "22px", fontWeight: "bold", color: "green" }}>Congratulations</Typography>
                        <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>You have successfully made an order</Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default PaymentModal;