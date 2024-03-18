import AppBar from '../AppBar/AppBar'
import Footer from '../Footer/Footer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Divider from '@mui/material/Divider'
import { styled, useTheme } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import axios from 'axios'
import { useState, useEffect } from 'react'
import MobileStepper from '@mui/material/MobileStepper'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Link } from 'react-router-dom'

const baseURL = 'http://localhost:3000'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function Field() {

  const [fields, setFields] = useState(null)
  const [loading, setLoading] = useState(true)
  const [fieldId, setFieldId] = useState(null)
  const [open, setOpen] = useState(false)

  //Dialog
  const handleClickOpen = (id) => {
    setFieldId(id)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  //Carousel
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }



  useEffect(() => {
    axios.get(`${baseURL}/api/fields/getAllFields`)
      .then(response => {
        console.log(response.data)
        setFields(response.data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <AppBar />
      <Box sx={{
        flexGrow: 1,
        p: 5
      }}>
        <Divider sx={{
          width: '100px',
          height: '4px',
          backgroundColor: 'red'
        }}
        />
        <Typography gutterBottom variant="h4" component="div" fontWeight={'bold'} pb={'20px'} pt={'10px'} color={'black'}>
          Sân bóng đá
        </Typography>
        <Grid container spacing={5} columns={24}>
          {
            loading
              ? <Grid item xs={24}>Đợi xíu nha, api đang load nè</Grid>
              : fields.map(field => (
                <Grid key={field._id} item xs={8}>
                  <Card
                    sx={{
                      padding: '10px',
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    }} >
                    <CardActionArea onClick={() => handleClickOpen(field._id)}>
                      <CardMedia>
                        <img
                          src={field.imageUrl[0]}
                          alt={field.name}
                          style={{
                            height: '400px',
                            width: '100%',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '20px'
                          }}
                        />
                      </CardMedia>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'Bold' }}>
                          {field.name}
                        </Typography>
                        <Typography variant="h6" color="error" mt={'10px'}>
                          {(field.price / 100).toLocaleString('vi-VN')} VNĐ / Giờ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: 'center', p: 1 }}>
                      <Link to={`/Booking/${field._id}`}>
                        <Button variant="outlined" size="large" color="primary" sx={{ borderRadius: 5, px: 15 }}>
                          Đặt sân
                        </Button>
                      </Link>
                    </CardActions>
                    {fieldId == field._id ? <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                      fullWidth
                      maxWidth={'sm'}
                    >
                      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        {field.name}
                      </DialogTitle>
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500]
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                      <DialogContent dividers>
                        <Box sx={{ maxWidth: '100vw', flexGrow: 1, position: 'relative' }}>
                          <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                            key={field._id}
                          >
                            {field.imageUrl.map((step, index) => (
                              <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                  <img
                                    key={step.label}
                                    src={step}
                                    alt={step.label}
                                    style={{
                                      height: '400px',
                                      width: '100%',
                                      overflow: 'hidden',
                                      backgroundPosition: 'center',
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      borderRadius: '5px'
                                    }}
                                  />
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
                              padding: '10px',
                              fontSize: '30px'
                            }}
                          >
                            <MobileStepper
                              sx={{
                                backgroundColor: 'transparent'
                              }}
                              steps={field.imageUrl.length}
                              position="static"
                              activeStep={activeStep}
                              nextButton={
                                <Button
                                  sx={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                  }}
                                  size="large"
                                  onClick={handleNext}
                                  disabled={activeStep === field.imageUrl.length - 1}
                                >
                                  {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                  ) : (
                                    <KeyboardArrowRight />
                                  )}
                                </Button>
                              }
                              backButton={
                                <Button size="large" onClick={handleBack} disabled={activeStep === 0}
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
                        <Box>
                          <Typography variant="p" color="black" mt={'10px'} sx={{ display: 'block', fontSize: '20px' }}>
                            <Typography variant="span" sx={{ fontWeight: 500 }}>Tổng sân</Typography>: {field.fieldChild.length}
                          </Typography>
                          <Typography variant="p" color="error" mt={'10px'} sx={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>
                            <Typography variant="span" color="black" sx={{ fontWeight: 500 }}>Giá sân:</Typography> {(field.price / 100).toLocaleString('vi-VN')} VNĐ / Giờ
                          </Typography>
                          <Typography variant="p" color="black" mt={'10px'} sx={{ display: 'block', fontSize: '20px' }}>
                            <Typography variant="span" sx={{ fontWeight: 500 }}>Số điện thoại liên hệ chủ sân</Typography>: +84{field.phoneNumber}
                          </Typography>
                          <Typography variant="p" color="black" mt={'10px'} sx={{ display: 'block', fontSize: '20px' }}>
                            <Typography variant="span" sx={{ fontWeight: 500 }}>Mô tả</Typography>: {field.description}
                          </Typography>
                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Link to={`/Booking/${field._id}`}>
                          <Button autoFocus variant="outlined" size="large" color="primary" sx={{ borderRadius: 5, px: 5 }}>
                            Đặt sân
                          </Button>
                        </Link>
                      </DialogActions>
                    </BootstrapDialog> : null}
                  </Card>
                </Grid >
              ))}
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default Field