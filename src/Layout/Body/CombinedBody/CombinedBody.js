import CardList from "../Cards/CardList"
import ImageSlider from "../Slider/ImageSlider"
import { Box } from '@mui/material'
const CombinedBody = ()=>{
    return (
        <>
            <ImageSlider />
            <CardList />
        </>
    )
}

export default CombinedBody