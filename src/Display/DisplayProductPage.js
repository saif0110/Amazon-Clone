
import {
    Box,
    Typography,
    Stack,
    Button,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Rating,
    FormControl,
    Select,
    MenuItem,
    Snackbar,
    Alert,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CombinedHeader from '../Layout/Header/Combined Header/CombineHeader'
import CombinedFooter from '../Layout/Footer/Combined Footer/CombinedFooter'
import { cartAction } from '../Redux/Cart/CartAction'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import AddressModal from '../PaymentModal/AddressModal'
import { buyItemAction } from '../Redux/BuyedItemDetail/BuyedItemAction'
import { signInAction } from '../Redux/IsSignIn/signInAction'

const AddToCartButtonStyle = {
    bgcolor: "#FCD200",
    width: "200px",
    height: "32px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#fbc02d"
    },
    fontSize: "13px",
    textTransform: "none",
    borderRadius: "20px"
}
const BuyNowButtonStyle = {
    bgcolor: "#ffa000",
    width: "200px",
    height: "32px",
    color: "#0F1111",
    '&: hover': {
        bgcolor: "#ff8f00"
    },
    fontSize: "13px",
    textTransform: "none",
    borderRadius: "20px"
}
const DisplayProductPage = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch()
    const productToDsplay = useSelector(state => state.display.productToDsplay)
    const isSignedIn = useSelector(state => state.signInUp.isSignedIn)
    console.log("isSignedIn: ", isSignedIn);
    if (productToDsplay === -1) navigate('/')
    const APIItems = useSelector(state => state.API.items)
    const productDetails = APIItems[productToDsplay - 1];

    const handleAddToCartClick = (productDetail) => {
        dispatch(cartAction(productDetail))
        setOpen(true);
    }
    const handleBuyNowClick = (productDetail) => {
        if (isSignedIn) {
            dispatch(buyItemAction(productDetail))
            navigate('address-modal')
        }
       else 
        navigate('/sign-in')
    }
    const handleChange = (event) => {
        setQty(event.target.value)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <CombinedHeader />
            <Box pt={4}>
                <Box>
                    <Grid container spacing={2} p={1} sx={{ bgcolor: "#f5f5f5" }}>
                        <Grid item>
                            <Card sx={{
                                maxWidth: "70vw",
                                bgcolor: "white",
                                border: "1px solid lightgray",
                                padding: "12px"
                            }} key={productDetails.id} elevation={0}>
                                <Box sx={{ display: "flex" }}>
                                    <CardMedia
                                        component="img"
                                        height={250}
                                        image={productDetails.image}
                                        alt={productDetails.title}
                                        sx={{ objectFit: "contain", bgcolor: "white", width: "20vw" }}
                                    />
                                    <CardContent sx={{ width: "60vw" }}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant="h6" component="div" sx={{ fontSize: "16px", fontWeight: "bold", width: "70%" }}>
                                                {productDetails.title}
                                            </Typography>
                                            <Typography variant="h6" component="div" sx={{ color: "gray", fontSize: "16px", fontWeight: "bold" }}>
                                                ${productDetails.price}
                                            </Typography>

                                        </Box>
                                        <Stack spacing={1} direction={'row'}>
                                            <Rating size='small' name="half-rating" value={productDetails.rating.rate} precision={0.5} readOnly />
                                            <Typography sx={{ fontSize: "13px", color: "#232F3E" }}>{`rating ${productDetails.rating.count}`}</Typography>
                                        </Stack>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "13px" }}>
                                            {productDetails.description}
                                        </Typography>
                                        <FormControl sx={{ paddingTop: "12px", paddingBottom: "7px" }}>
                                            <Stack direction="row">
                                                Qty:
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={qty}
                                                    onChange={handleChange}
                                                    size='small'
                                                    sx={{ height: "25px" }}
                                                >
                                                    {
                                                        numbers.map(number => (
                                                            <MenuItem value={number} key={number - 1}>{number}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </Stack>
                                        </FormControl>
                                        <Box display="grid">
                                            <Button variant='contained' sx={{ marginBottom: "7px", ...AddToCartButtonStyle }} disableElevation onClick={() => { handleAddToCartClick({ qty, ...productDetails }) }}>
                                                Add to Cart
                                            </Button>
                                            <Button variant='contained' sx={BuyNowButtonStyle} disableElevation onClick={() => { handleBuyNowClick({ qty, ...productDetails }) }}>
                                                Buy now
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ width: 500 }}>
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        open={open}
                        onClose={handleClose}
                        autoHideDuration={4000}
                    >
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: "#4caf50" }}>
                            Item successfully added to cart.
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
            <CombinedFooter />
        </>
    )
}

export default DisplayProductPage

const numbers =
    [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
        73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
        85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
        97, 98, 99, 100
    ]