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
} from '@mui/material'
import amazonLogo from '../assets/amazon-logo.png'
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import AddressDetails from '../FormUI/Forms/AddressDetails';

import { Form, Formik } from 'formik';
import * as yup from "yup";
// import { NavLink, useNavigate } from 'react-router-dom';

import countries from '../Data/countries.json'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ButtonField from '../FormUI/components/ButtonField';
import CheckBoxField from '../FormUI/components/CheckBoxField';
import InputField from '../FormUI/components/InputField';
import SelectField from '../FormUI/components/SelectField';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addressAction } from '../Redux/Address/AddressAction';

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

const AddressModal = () => {
    const dispatch = useDispatch()
    const addressDetail = useSelector(state => state.address.addressDetail)
    const itemDetail = useSelector(state => state.buyedItem.listOfBuyeditem[0])
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    console.log("item recently buyed: ", itemDetail); // working
    const handleClick = ()=>{
        navigate('pay')
    }
    const handleClose = () => {
        setOpen(false)
    }
    const initialFormValue = {
        country: "",
        fullName: "",
        mobile: "",
        pin: "",
        houseNumber: "",
        street: "",
        landmark: "",
        city: "",
        state: "",
        checkDefault: false
    }
    const formValidation = yup.object().shape({
        country: yup.string().required("Required"),
        fullName: yup.string().required("Required"),
        mobile: yup.string().required("Required"),
        pin: yup.string().required("Required").max(6, "Invalid pincode"),
        houseNumber: yup.string(),
        street: yup.string(),
        landmark: yup.string().required("Required"),
        city: yup.string().required("Required"),
        state: yup.string().required("Required"),
        checkDefault: yup.string()
    })
    return (
        <>
            <Box sx={{ bgcolor: "#f5f5f5", margin: "0px", padding: "0px" }}>
                <Box display="flex" justifyContent={'space-around'} p={1} sx={{ border: "1px solid lightgray" }}>
                    <img src={amazonLogo} alt="amazon-logo" width={'100px'} height={'60px'} />
                    <Typography sx={{ fontSize: "30px" }}>Checkout</Typography>
                    <LockIcon sx={{ color: "#9e9e9e", paddingTop: "10px" }} />
                </Box>
                <Box display="flex" pl={12}>
                    <Box width={'70vw'}>
                        <Box>
                            <Box pt={2} pb={2} pl={2}>
                                <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#c45500" }}>1 Select a delivery address</Typography>
                                <Box sx={{ border: "1px solid lightgray", borderRadius: "10px" }} ml={2}>
                                    <Box p={2}>
                                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Your Address</Typography>
                                        <Divider />
                                        <Box sx={{ border: "1px solid #c45500" }} p={1}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>{ addressDetail.fullName }</Typography>
                                            <Typography sx={{ fontSize: "15px" }}>{`${addressDetail.street} ${addressDetail.landmark} ${addressDetail.city} ${addressDetail.state} ${addressDetail.pin}`}</Typography>
                                        </Box>
                                        <Stack direction={'row'} pt={1}>
                                            <AddIcon />
                                            <NavLink onClick={() => (setOpen(true))}> Add new address</NavLink>
                                        </Stack>
                                    </Box>
                                    <Divider />
                                    <Box p={2}>
                                        <Button sx={buttonStyle} onClick={()=>{handleClick()}}>Use this address</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box p={2}>
                            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>2 Payment method</Typography>
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
                                    <Button sx={{ ...buttonStyle, fontWeight: "normal", width: "248px", marginBottom: "7px" }} onClick={()=>{handleClick()}}>Use this address</Button>
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
                                                <Typography sx={{ fontSize: "12px" }}>{(itemDetail.price * itemDetail.qty) >= 50 ? `-$2`: `--`}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box pt={1} pb={1}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#c45500" }}>Order Total:</Typography>
                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#c45500" }}>{`$${(itemDetail.price * itemDetail.qty) + 2 - ((itemDetail.price * itemDetail.qty) >= 50 ? 2: 0)}`}</Typography>
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
                    <DialogTitle sx={{fontSize: "20px", fontWeight: "bold"}}>Enter a new delivery address</DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: "gray",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>Add a new address</Typography>
                        <Box width={500}>
                            <Formik initialValues={{ ...initialFormValue }}
                                validationSchema={formValidation}
                                onSubmit={(values) => {
                                    console.log('values :', values);
                                    dispatch(addressAction(values))
                                    handleClose()

                                }}>
                                <Form>
                                    <Grid container gap={2}>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Country/Region</Typography>
                                            <SelectField name="country" options={countries} />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>{"Full name (First and Last name)"}</Typography>
                                            <InputField name="fullName" />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Mobile number</Typography>
                                            <InputField type="number" name="mobile" />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Pincode</Typography>
                                            <InputField type="number" name="pin" />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Flat, House no., Building, Company, Apartment</Typography>
                                            <InputField name="houseNumber" />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Area, Street, Sector, Village</Typography>
                                            <InputField name="street" />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Landmark</Typography>
                                            <InputField name="landmark" placeholder="E.g.near appolo hospital " />
                                        </Grid>
                                        <Grid container display="flex" gap={1}>
                                            <Grid item width={'49%'}>
                                                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Twon/City</Typography>
                                                <InputField name="city" />
                                            </Grid>
                                            <Grid item width={'49%'}>
                                                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>State</Typography>
                                                <InputField name="state" />
                                            </Grid>
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <CheckBoxField label="Make this my default address" />
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>{"Delivery instructions (optional)"}</Typography>
                                            <Stack direction={'row'}>
                                                <KeyboardArrowDownIcon />
                                                <NavLink>Add preferences, notes, access codes and more</NavLink>
                                            </Stack>
                                        </Grid>
                                        <Grid item width={'inherit'}>
                                            <ButtonField sx={{ ...buttonStyle, width: "120px" }}>Use this address</ButtonField>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        </Box>
                    </DialogContent>
                </Dialog>
            </Box>
            <Outlet />
        </>
    )
}

export default AddressModal;