import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Booking from './Booking'
import PaymentForm from './PaymentForm'
import Review from './Review'
import AppBar from '../AppBar/AppBar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

const steps = ['Kiểm tra', 'Thông tin', 'Thanh toán']

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Booking />
    case 1:
      return <Review />
    case 2:
      return <PaymentForm />
    default:
      throw new Error('Unknown step')
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }



  return (
    <React.Fragment>
      <AppBar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Đặt sân
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Cảm ơn bạn.
              </Typography>
              <Typography variant="subtitle1">
                Bạn đã đặt sân thành công vui lòng chờ xác nhận
              </Typography>
              <Link to="/bookingDetails">
                <Button>
                  Xem chi tiết đặt sân
                </Button>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {(activeStep !== 0 && activeStep !== 1) && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Quay lại
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Thanh toán ngay' : 'Tiếp'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
