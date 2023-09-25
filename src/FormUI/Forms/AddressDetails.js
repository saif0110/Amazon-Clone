import {
    Box,
    Button,
    Divider,
    Grid,
    Stack,
    Typography
} from '@mui/material'
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import { NavLink, useNavigate } from 'react-router-dom';
import SelectField from '../components/SelectField';
import countries from '../../Data/countries.json'
import CheckBoxField from '../components/CheckBoxField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

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
const AddressDetails = () => {

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
        <Box width={500}>
            <Formik initialValues={{ ...initialFormValue }}
                validationSchema={formValidation}
                onSubmit={(values) => {
                    console.log('values :', values);
                    
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
                            <ButtonField sx={{...buttonStyle, width: "120px"}}>Use this address</ButtonField>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
    )
}

export default AddressDetails;