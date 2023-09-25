import {
    Box,
    Button,
    Typography,
    Stack
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const FooterBanner = () => {
    return (
        <Box sx={{ bgcolor: "#232F3E" }}>
            <Box display={'flex'} justifyContent={'space-between'} padding={10} sx={{ borderBottom: "1px solid lightgray" }}>
                <Box sx={{ color: "white" }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold" }} gutterBottom>Get to know Us</Typography>
                    <Typography variant='body2' gutterBottom>About Us</Typography>
                    <Typography variant='body2' gutterBottom>Careers</Typography>
                    <Typography variant='body2' gutterBottom>Press Release</Typography>
                    <Typography variant='body2' >Amazon Science</Typography>
                </Box>
                <Box sx={{ color: "white" }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold" }} gutterBottom>Connect with Us</Typography>
                    <Typography variant='body2' gutterBottom>Facebook</Typography>
                    <Typography variant='body2' gutterBottom>Twitter</Typography>
                    <Typography variant='body2' >Instagram</Typography>
                </Box>
                <Box sx={{ color: "white" }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold" }} gutterBottom>Make Money with Us</Typography>
                    <Typography variant='body2' gutterBottom>Sell on Amazon</Typography>
                    <Typography variant='body2' gutterBottom>Sell underamazon Accelerator</Typography>
                    <Typography variant='body2' gutterBottom>Protect and Build Your Brand</Typography>
                    <Typography variant='body2' gutterBottom>Amazon Globall Selling</Typography>
                    <Typography variant='body2' gutterBottom>Become an Affeliate</Typography>
                    <Typography variant='body2' gutterBottom>Fulfilment by Amazon</Typography>
                    <Typography variant='body2' gutterBottom>Advertise Your Products</Typography>
                    <Typography variant='body2'>Amazon Pay on Merchants</Typography>
                </Box>
                <Box sx={{ color: "white" }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold" }} gutterBottom>Let Us Help You</Typography>
                    <Typography variant='body2' gutterBottom>COVID-19 and Amazon</Typography>
                    <Typography variant='body2' gutterBottom>Your Account</Typography>
                    <Typography variant='body2' gutterBottom>Returns Center</Typography>
                    <Typography variant='body2' gutterBottom>100% Perchase Protection</Typography>
                    <Typography variant='body2' gutterBottom>Amazon App Download</Typography>
                    <Typography variant='body2'>Help</Typography>
                </Box>
            </Box>
            <Box padding={3} display={'flex'} justifyContent={'center'} >
                <Box paddingRight={8}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPXbwB74omEB6aIC5vmwkWqtWDgLQLuSKQg&usqp=CAU" width={150} height={80} />
                </Box>
                <Box>
                    <Button sx={{ color: "white", border: "1px solid white", marginTop: "15px" }} startIcon={<LanguageIcon />} endIcon={<KeyboardArrowDownIcon />}>English</Button>
                </Box>
            </Box>
            <Box sx={{color: "white"}} paddingBottom={3}>
                <Stack spacing={2} direction="row"
                paddingLeft={20}
                >
                    <Typography variant='body2'>Australia</Typography>
                    <Typography variant='body2'>Brazil</Typography>
                    <Typography variant='body2'>Canada</Typography>
                    <Typography variant='body2'>China</Typography>
                    <Typography variant='body2'>France</Typography>
                    <Typography variant='body2'>Germany</Typography>
                    <Typography variant='body2'>Italy</Typography>
                    <Typography variant='body2'>Japan</Typography>
                    <Typography variant='body2'>Mexico</Typography>
                    <Typography variant='body2'>Netherland</Typography>
                    <Typography variant='body2'>Poland</Typography>
                    <Typography variant='body2'>Singapor</Typography>
                    <Typography variant='body2'>Spain</Typography>
                    <Typography variant='body2'>Turkeya</Typography>
                    <Typography variant='body2'>United Arab Emirates</Typography>
                </Stack>
                    <Stack direction={"row"} spacing={2} paddingLeft={80}>
                    <Typography variant='body2'>United Kingdom</Typography>
                    <Typography variant='body2'>United State</Typography>
                    </Stack>
            </Box>
        </Box>
    )
}

export default FooterBanner