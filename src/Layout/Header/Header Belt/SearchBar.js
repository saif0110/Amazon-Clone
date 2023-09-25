import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  Select,
  MenuItem,
  Menu
} from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const [brandValue, setBrandValue] = useState("All")
  const [flag, setFlag] = useState(false)
  const handleChange = (event)=>{
    setBrandValue(event.target.value)
  }
  return (
    // <Box width={500} sx={{ backgroundColor: "white" }}>
    <Input
      id="searcg bar"
      placeholder="Search amazon.in"
      startAdornment={
        <InputAdornment position="start">
          <FormControl sx={{
          '&:hover': {
            bgcolor: "lightgray"
          }
           }}>
            <Select
              variant='filled'
              value={brandValue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{fontSize: "12px", 
              height: "40px", 
              borderTopRightRadius: "0px", 
              borderBottomRightRadius: "0px",
              paddingBottom: "15px"
            }}
              MenuProps={{
                style: {
                  maxHeight: "480px",
                  borderRadius: "0px"
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
            >
              {
                brands.map((brand, pos) => (
                  <MenuItem sx={{fontSize: "12px"}} value={brand} key={pos+1}>{brand}</MenuItem>
                  ))
                }
            </Select>
          </FormControl>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position='end'>
          <Button endIcon={<SearchIcon size="large"/>} sx={
            {bgcolor: "orange", 
            height: "40px", 
            borderTopLeftRadius: "0px", 
            borderBottomLeftRadius: "0px",
          '&:hover': {
            bgcolor: "orange"
          }}
            }/>
        </InputAdornment>
      }
      disableUnderline
      onClick={()=>{setFlag(true)}}
      sx={{ width: "36vw",
      height: "40px", 
      bgcolor: "white", 
      borderRadius: "5px",
      border: flag && "3px solid orange",
     }}
    />
    // </Box>
  )
}

export default SearchBar

const brands = [
  "All",
  "All Categories",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fashion",
  "Amazon Fresh",
  "Amazon Pharmacy",
  "Appliances",
  "Apps & Games",
  "Audible Audiobooks",
  "Baby","Beauty", "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Collectibles",
  "Electronics",
  "Furniture",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourment Foods",
  "Health & Personal Care",
  "Industrial & Scientific",
  "Jewellery",
  "Kindle Store",
  "Luggage & Bags",
  "Luxury Beauty",
  "Movies & TV Shows",
  "Music",
  "Musical Instrument",
  "Office Products",
  "Pet Supplies",
  "Prime Video",
  "Shoes & Handbags",
  "Software",
  "Sport Fitness & Outdoors",
  "Subscribe & Save",
  "Tools & Home Improvement",
  "Toys & Games",
  "Watches"
]