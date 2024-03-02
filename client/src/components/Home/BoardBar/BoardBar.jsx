import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Link } from 'react-router-dom'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    imgPath:
    'https://www.beyondcorporate.co.uk/wp-content/uploads/2021/04/Old-Trafford-1980x943.jpg'
  },
  {
    imgPath:
      'https://media.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/Man-U-09072020-cover-2.jpeg'
  },
  {
    imgPath:
    'https://media2.gody.vn/public/images/place/san-van-dong-old-trafford-old-trafford-stadium/6549e80a76393-1699342346.jpg'
  }
]

function BoardBar() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }
  return (
    <Box sx={{ maxWidth: '100vw', flexGrow: 1, position: 'relative' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (

              <>
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: '400',
                    overflow: 'hidden',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                {activeStep === index && (
                  <Link to="/booking">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        bottom: 100,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontWeight: 'bold',
                        backgroundColor: 'red',
                        borderRadius: 5,
                        fontSize: '1.2rem'
                      }}
                    >
                    Booking now
                    </Button>
                  </Link>
                )}
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          backgroundColor: 'transparent',
          padding: '10px'
        }}
      >
        <MobileStepper
          sx={{
            backgroundColor: 'transparent'
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{
                color: 'black',
                fontWeight: 'bold'
              }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}
              sx={{
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Box>
    </Box>
  )
}

export default BoardBar
