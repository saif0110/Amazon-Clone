import {
    Box,
    Button,
    Divider,
    Stack,
    Typography
} from '@mui/material'
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import logo from '../../assets/amazon-logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../Redux/IsSignIn/signInAction';

const boxFirst = {
    padding: "20px",
    border: "1px solid lightgray",
    borderRadius: "5px"
}

const continueButtonStyle = {
    bgcolor: "#FCD200",
    height: "32px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#fbc02d"
    },
    fontSize: "13px",
    textTransform: "none",
    borderRadius: "5px"
}

const SignInPage = () => {
    const [userFound, setUserFound] = useState(false)
    const [signinButtonClicked, setSigninButtonClicked] = useState(false)
    const userDetail = useSelector(state => state.signInUp.userDetail)
    // console.log(userDetail);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialFormValue = {
        email: ""
    }
    const formValidation = yup.object().shape({
        email: yup.string().email("Invalid email address").required("Required")
    })
    return (
        <Box sx={{ width: "100vw" }}>
            <Box sx={{ width: "360px", margin: "auto" }}>
                <Box display={'flex'} justifyContent={'center'}>
                    <img src={logo} alt='Amazon logo' width={100} height={70} />
                </Box>
                <Formik initialValues={{ ...initialFormValue }}
                    validationSchema={formValidation}
                    onSubmit={(values) => {
                        setSigninButtonClicked(true)
                        if(userDetail.email === values.email){
                            dispatch(signInAction(true))
                            setUserFound(true)
                            navigate('/')
                        }
                    }}>
                    <Form>
                        <Box sx={boxFirst}>
                           {(!userFound && signinButtonClicked) ?  
                           <Typography variant='body1' color= "error">User not found, create an account first.</Typography>
                           : false}
                            <Typography variant='h5'>Sign in</Typography>
                            <Box>
                                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Email or mobile phone number</Typography>
                                <InputField type='email' name='email' />
                            </Box>
                            <Box width={'inherit'} pt={2}>
                                <ButtonField sx={{ ...continueButtonStyle, marginBottom: "12px" }} variant="contained" >Continue</ButtonField>
                                <Typography sx={{ fontSize: "12px", marginBottom: "20px" }}>By continuing, you agree to Amazon's <span style={{ color: "blue" }}>Conditions of Use</span> and <span style={{ color: "blue" }}>Privacy Notice.</span></Typography>
                                <Typography sx={{ fontSize: "12px", marginBottom: "20px" }}><span style={{ color: "blue" }}>Need help?</span></Typography>
                                <Divider />
                                <Box pt={2}>
                                    <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>Buying for work?</Typography>
                                    <Typography sx={{ fontSize: "13px", color: "blue" }}>Shop on Amazon Business</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Form>
                </Formik>
                <Box sx={{ paddingTop: "20px", paddingBottom: "20px"}}>
                    <Box sx={{paddingBottom: "12px"}}>
                        <Divider>
                            <Typography sx={{ fontSize: "13px", color: "gray" }}>New customer?</Typography>
                        </Divider>
                        <Button onClick={()=>{navigate('/sign-up')}} sx={{width: '360px', fontSize: "13px", height: "32px", border: "1px solid lightgray", textTransform: "none", marginTop: "10px", marginBottom: "10px" }} variant='outlined'>Create your Amazon account</Button>
                    </Box>
                    <Divider />
                </Box>
                <Box display={'grid'} width="360px" justifyContent={'center'}>
                    <Stack direction='row' spacing={2} pb={1}>
                        <Typography sx={{ fontSize: "11px", color: "blue" }}>Conditions of Use</Typography>
                        <Typography sx={{ fontSize: "11px", color: "blue" }}>Privacy Notice</Typography>
                        <Typography sx={{ fontSize: "11px", color: "blue" }}>Help</Typography>
                    </Stack>
                    <Box>
                        <Typography sx={{ fontSize: "11px", color: "gray" }}>© 1996-2023, Amazon.com, Inc. or its affiliates</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SignInPage;