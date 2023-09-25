import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea, Box, Stack, Rating, Snackbar, Alert } from '@mui/material';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import fetchAPI from '../../../Redux/FetchAPI/APIAction';
import { PropaneSharp } from '@mui/icons-material';
import { connect } from 'react-redux';
import { displayProduct } from '../../../Redux/DisplayProduct/DisplayAction';
import { useNavigate } from 'react-router';

const CardList = ({ API, fetchAPI }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        fetchAPI()
    }, [])

    const handleClick = (id) => {
        dispatch(displayProduct(id));
        navigate("/display-product")
    }

    return (
        <Grid container spacing={2} p={1} sx={{ bgcolor: "#f5f5f5" }}>
            {
                API && API.items && API.items.map((product) => (
                    <Grid item flexGrow={1}>
                        <Card sx={{
                            maxWidth: 280,
                            bgcolor: "white",
                        }} key={product.id} elevation={0} onClick={()=>{handleClick(product.id)}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={250}
                                    width={'inherit'}
                                    image={product.image}
                                    alt={product.title}
                                    sx={{ objectFit: "contain", bgcolor: "white" }}
                                />
                                <CardContent>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Typography variant="h6" component="div" sx={{ fontSize: "16px", fontWeight: "bold", width: "70%" }}>
                                            {product.title.substring(0, 50)}..
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ color: "gray", fontSize: "16px", fontWeight: "bold" }}>
                                            ${product.price}
                                        </Typography>

                                    </Box>
                                    <Stack spacing={1} direction={'row'}>
                                        <Rating size='small' name="half-rating" value={product.rating.rate} precision={0.5} readOnly />
                                        <Typography sx={{fontSize:"13px", color: "#232F3E"}}>{product.rating.count}</Typography>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "13px" }}>
                                        {product.description.substring(0, 100)}..
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        API: state.API,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAPI: () => dispatch(fetchAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);