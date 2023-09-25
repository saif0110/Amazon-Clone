import {
    Box,
    Typography
} from '@mui/material'
const FooterBelt = () => {
    return (
        <Box sx={{ bgcolor: "#131A22" }}>
            <Box display={'flex'} sx={{ color: "white" }} padding={5} justifyContent={'space-between'}>
                <Box width={105}>
                    <Box>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>AbeBooks</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Books, art & Collectibles</Typography>
                    </Box>
                    <Box paddingTop={3}>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>Shopbop</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Designer Fashion Brands</Typography>
                    </Box>
                </Box>
                <Box width={160}>
                    <Box>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>Amazon Web Services</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Scalable Cloud Computing Services</Typography>
                    </Box>
                    <Box paddingTop={3}>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>Amazon Business</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Everything For Your Business</Typography>
                    </Box>
                </Box>
                <Box width={120}>
                    <Box>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>Audible</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Download Audiobooks</Typography>
                    </Box>
                    <Box paddingTop={3}>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>Prime Now</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>2-Hours Delievry on Everyday Itmes</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box width={100}>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>DPReview</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Digital Photography</Typography>
                    </Box>
                    <Box width={200} paddingTop={3}>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>Amazon Prime Music</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>100 millions songs ad-free over 15 million podcast episodes</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box width={85}>
                        <Typography variant='body2' sx={{fontWeight: "bold"}}>IMDb</Typography>
                        <Typography variant='body2' sx={{color: "gray"}}>Movies, TV & Celebrities</Typography>
                    </Box>
                </Box>

            </Box>
            <Box sx={{color: "white", textAlign: "center", padding: "16px"}}>
                <Typography variant='body2'>Conditions of Use and Sale Privacy Notice Interest-Based Ads</Typography>
                <Typography variant='body2'>© 1996-2023, Amazon.com, Inc. or its Affilates</Typography>
            </Box>
        </Box>
    )
}

export default FooterBelt