import {
    Box,
    Divider,
    Stack,
    Typography
} from '@mui/material'
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import logo from '../../assets/amazon-logo.png'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../Redux/IsSignIn/signInAction';

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

const SignUpPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialFormValue = {
        name: "",
        phone: "",
        email: "",
        password: ""
    }
    const formValidation = yup.object().shape({
        name: yup.string().required("Required"),
        phone: yup.number().required("Required"),
        email: yup.string().email("Invalid email address"),
        password: yup.string().required("Required").min(6, "password must be min 6 character long.")
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
                        dispatch(signUpAction(values))
                        navigate('/sign-in')
                    }}>
                    <Form>
                        <Box sx={boxFirst}>
                            <Typography variant='h5'>Create Account</Typography>
                            <Box pt={2}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Your name</Typography>
                                <InputField name='name' placeholder="First and last name"/>
                            </Box>
                            <Box pt={1}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Mobile</Typography>
                                <Stack direction={'row'} spacing={2}>
                                    <Box sx={{ width: "20%" }}><InputField type='number' name={'counrty-code'} value={91} /></Box>
                                    <Box sx={{ width: "78%" }}><InputField type='number' name={'phone'} placeholder="Mobile number"/></Box>
                                </Stack>
                            </Box>
                            <Box pt={1}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>{"Email (optional)"}</Typography>
                                <InputField type="email" name='email' />
                            </Box>
                            <Box pt={1}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Password</Typography>
                                <InputField type="password" name='password' placeholder="At least 6 charters"/>
                            </Box>
                            <Box width={'inherit'} pt={2}>
                                <Typography sx={{ fontSize: "13px", marginBottom: "20px" }}>
                                    To verify your number, we will send you a text
                                    message with a temporary code. Message and data
                                    rates may apply.
                                </Typography>
                                <ButtonField sx={{ ...continueButtonStyle, marginBottom: "20px" }} variant="contained">Continue</ButtonField>
                                <Divider />
                                <Box pt={2} pb={2}>
                                    <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>Buying for work?</Typography>
                                    <Typography sx={{ fontSize: "13px", color: "blue" }}>Shop on Amazon Business</Typography>
                                </Box>
                                <Divider />
                                <Box>
                                    <Typography sx={{ fontSize: "13px", marginTop: "20px", marginBottom: "20px" }}>Already have an Account? <span style={{ color: "blue" }}>Sign  in</span></Typography>
                                    <Typography sx={{ fontSize: "12px" }}>By creating an Account or logging in, you agree to Amazon's <span style={{ color: "blue" }}>Conditions of Use</span> and <span style={{ color: "blue" }}>Privacy Notice.</span></Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display={'grid'} width={360} justifyContent={'center'}>
                            <Divider />
                            <Stack direction='row' spacing={2} pt={4} pb={1}>
                                <Typography sx={{ fontSize: "11px", color: "blue" }}>Conditions of Use</Typography>
                                <Typography sx={{ fontSize: "11px", color: "blue" }}>Privacy Notice</Typography>
                                <Typography sx={{ fontSize: "11px", color: "blue" }}>Help</Typography>
                            </Stack>
                            <Box>
                                <Typography sx={{ fontSize: "11px", color: "gray" }}>© 1996-2023, Amazon.com, Inc. or its affiliates</Typography>
                            </Box>
                        </Box>
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}

export default SignUpPage;