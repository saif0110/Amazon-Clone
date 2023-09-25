import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Stack,
    Typography,
    Divider
} from "@mui/material"

const formLabelStyle={
    "& .MuiFormControlLabel-label": {
        fontSize: "12px",
      }
}

const typoStyle= {
    fontSize: "12px",
    paddingLeft: "30px"
}
const LanguageTTC = () => {
    return (
        <Box sx={{paddingLeft: "10px"}}>
            <FormControl>
                <FormLabel id="language-label"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="EN"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={formLabelStyle} value="EN" control={<Radio />} label="English - EN" /><Divider/>
                    <FormControlLabel sx={formLabelStyle} value="HI" control={<Radio />} label="हिन्दी - HI" />
                    <FormControlLabel sx={formLabelStyle} value="TA" control={<Radio />} label="தமிழ் - TA" />
                    <FormControlLabel sx={formLabelStyle} value="TE" control={<Radio />} label="తెలుగు - TE" />
                    <FormControlLabel sx={formLabelStyle} value="KA" control={<Radio />} label="ಕನ್ನಡ - KA" />
                    <FormControlLabel sx={formLabelStyle} value="ML" control={<Radio />} label="മലയാളം - ML" />
                    <FormControlLabel sx={formLabelStyle} value="BN" control={<Radio />} label="বাংলা - BN" />
                    <FormControlLabel sx={formLabelStyle} value="MR" control={<Radio />} label="मराठी - MR" />
                </RadioGroup>
            </FormControl>
            <Typography sx={typoStyle} color={'secondary'}>Learn More</Typography>
            <Stack direction="row" pt={1.2} pb={1.2}>
            <img src="https://img.freepik.com/premium-photo/india-national-fabric-flag_113767-1933.jpg?size=626&ext=jpg&ga=GA1.1.1984492667.1694231761&semt=ais" alt="loading.." width={25} height={15} />
                <Typography sx={{fontSize: "12px", paddingLeft: "5px", paddingRight: "10px"}} >You are shopping on Amazon.in</Typography>
            </Stack>
            <Typography sx={{paddingBottom: "10px", ...typoStyle}} color={'secondary'}>Change country/region</Typography>
        </ Box>
    )
}

export default LanguageTTC