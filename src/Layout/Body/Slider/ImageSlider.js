import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, Button} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import bannerImgOne from '../../../assets/bannerImgOne.jpg'
import bannerImgTwo from '../../../assets/bannerImgTwo.jpg'
import bannerImgThree from '../../../assets/bannerImgThree.jpg'
import bannerImgFour from '../../../assets/bannerImgFour.jpg'
import bannerImgFive from '../../../assets/bannerImgFive.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      bannerImgOne,
  },
  {
    label: 'Bird',
    imgPath:
      bannerImgTwo,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      bannerImgThree,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      bannerImgFour,
  },
  {
    label: 'loading',
    imgPath:
      bannerImgFive,
    },
  ];
  
  const parentBoxButtonStyle = {
    display: "flex", 
    position: "absolute", 
    bottom: "100px",
    left: "44%"
}
const boxButtonStyle = {
  minWidth: "0px",
  minHeight: "0px",
  bgcolor: "#0F1111", 
  color: "white", 
  height: "30px",
  width :"30px",
  borderRadius: "15px",
  marginRight: "5px"

}
const ImageSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleClick = (event)=>{
    const value = parseInt(event.target.innerHTML)-1;
    setActiveStep(value)
  }
  return (
    <Box sx={{position: "relative"}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  maxWidth: 'inherit',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={parentBoxButtonStyle}>
        <Button variant="contained" sx={boxButtonStyle} disableElevation onClick={handleClick}>1</Button>
        <Button variant="contained" sx={boxButtonStyle} disableElevation onClick={handleClick}>2</Button>
        <Button variant="contained" sx={boxButtonStyle} disableElevation onClick={handleClick}>3</Button>
        <Button variant="contained" sx={boxButtonStyle} disableElevation onClick={handleClick}>4</Button>
        <Button variant="contained" sx={boxButtonStyle} disableElevation onClick={handleClick}>5</Button>
      </Box>
    </Box>
  );
}

export default ImageSlider;