import {
    Box, Button, Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, MenuItem, Rating, Select, Stack, Typography,
} from '@mui/material'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../Redux/Cart/CartAction';

const CartData = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.addedItemToCart)
    console.log("cartProducts : ", cartProducts);
    const handleChange = (event) => {
        setQty(event.target.value)
    }
    const handleDeleteItemClick = (id)=>{
        dispatch(deleteItemFromCart(id))
    }
    return (
        <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold", paddingLeft: "7px", paddingTop: "7px" }}>Shopping Cart</Typography>
            <Box>
                {
                    <Grid container spacing={2} p={1} sx={{ bgcolor: "#f5f5f5" }}>
                        {
                            cartProducts.map((productDetails) => (
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
                                                            value={productDetails.qty}
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
                                                    <Button variant='contained' sx={{width: "120px", marginBottom: "7px" }} color="error" disableElevation onClick={() => handleDeleteItemClick(productDetails.id)}>
                                                        Delete item
                                                    </Button>
                                                </Box>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>

                }
            </Box>
        </Box>
    )
}

export default CartData;

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