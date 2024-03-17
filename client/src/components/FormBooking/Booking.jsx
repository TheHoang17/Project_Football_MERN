import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import Button from '@mui/material/Button'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)
const baseURL = 'http://localhost:3000'

export default function Booking() {
  const { id } = useParams()
  const [field, setField] = useState(null)
  const [openSnack, setOpenSnack] = React.useState(false)
  const [fieldChild, setFieldChild] = useState(null)
  const [recallApi, setRecallApi] = useState(1)

  useEffect(() => {
    axios.get(`${baseURL}/api/fields/getFieldById/${id}`)
      .then(response => {
        setField(response.data)
      })
      .catch(error => console.log(error))

  }, [id])



  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnack(false)
  }

  //Dialog
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1)
    }
  }))
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setRecallApi(Math.random())
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const today = dayjs()
  const todayStartOfTheDay = today.startOf('day')
  const [errorName, setErrorName] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [bookingDate, setBookingDate] = useState(new Date())
  const [checkDate, setCheckDate] = useState(new Date())
  const [validTime, setValidTime] = useState(true)
  const [timeTo, setTimeTo] = useState(null)
  const [timeFrom, setTimeFrom] = useState(null)
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [totalPrice, setTotalPrice] = useState(null)
  const [totalHours, setTotalHours] = useState(null)
  const [timeFrom1, setTimeFrom1] = useState(null)
  const [timeTo1, setTimeTo1] = useState(null)
  const [errorDate, setErrorDate] = useState('')
  const [messageSnack, setmessageSnack] = useState('')
  const [messageStatus, setmessageStatus] = useState(null)
  const [checked, setChecked] = useState(false)
  const [optionField, setOptionField] = useState('')
  //Format Vietnamese date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  }

  useEffect(() => {
    axios.get(`${baseURL}/api/fieldChilds/getFieldByParentId/${id}`)
      .then(response => {
        setFieldChild(response.data)
      })
      .catch(error => console.log(error))
  }, [id, recallApi])

  const handleValidateName = (e) => {
    const inputName = e.target.value
    if (!inputName.trim().includes(' ')) {
      setName(inputName)
      setErrorName(false)
    } else {
      setErrorName(true)
    }
    if (/\d/.test(inputName)) {
      setErrorName(true)
    }
  }
  const handleValidatePhone = (e) => {
    const inputPhone = e.target.value
    if (!inputPhone.trim().includes(' ')) {
      setPhone(inputPhone)
      setErrorPhone(false)
    } else {
      setErrorPhone(true)
    }
    if (inputPhone.match('[a-zA-Z]+')) {
      setErrorPhone(true)
    }
  }
  const handleCheckDate = (value) => {
    setCheckDate(value)
  }
  const handleBookingDate = (value) => {
    setBookingDate(value)
  }
  const handleTimeFrom = (value) => {
    setTimeFrom1(value)
    const hours = value.hour()
    const minutes = value.minute()
    let timeFormat = ''
    if (minutes > 0) {
      timeFormat = `${hours}h${minutes}`
    } else {
      timeFormat = `${hours}h${minutes}0`
    }
    setTimeFrom(timeFormat)
  }
  const handleTimeTo = (value) => {
    setTimeTo1(value)
    const hours = value.hour()
    const minutes = value.minute()
    let timeFormat = ''
    if (minutes > 0) {
      timeFormat = `${hours}h${minutes}`
    } else {
      timeFormat = `${hours}h${minutes}0`
    }
    setTimeTo(timeFormat)
  }

  const convertTimeStringToDate = (timeString) => {
    const [hours, minutes] = timeString.split('h')
    const date = new Date()
    date.setHours(hours)
    date.setMinutes(minutes)
    date.setSeconds(0)
    return date
  }

  const handleCheckDuplicate = () => {
    //Time for duplicate
    const timeFromdate1 = new Date(timeFrom1)
    const timeTodate1 = new Date(timeTo1)

    for (const fieldChildCheck of fieldChild) {
      if (fieldChildCheck.currentBooking.length > 0 && fieldChildCheck._id == optionField) {
        for (const booking of fieldChildCheck.currentBooking) {
          const existFromHours = convertTimeStringToDate(booking.fromHours)
          const existToHours = convertTimeStringToDate(booking.toHours)

          const selectedFromTime = moment(timeFromdate1)
          const selectedToTime = moment(timeTodate1)

          if (
            (selectedFromTime >= existFromHours && selectedFromTime < existToHours) ||
            (selectedToTime > existFromHours && selectedToTime <= existToHours) ||
            (selectedFromTime <= existFromHours && selectedToTime >= existToHours)
          ) {
            setmessageSnack('Giờ này đã được đặt, vui lòng chọn giờ khác!')
            setmessageStatus('error')
            setOpenSnack(true)
            setChecked(false)
            return
          }
        }
      } else {
        console.log('aloalo');
        setmessageSnack('Giờ hợp lệ, bạn có thể đặt sân!')
        setmessageStatus('success')
        setOpenSnack(true)
        setChecked(true)
      }
    }
  }

  const handleCheckTime = () => {

    const timeFromdate = Math.abs(new Date(timeFrom1).getTime() / 1000)
    const timeTodate = Math.abs(new Date(timeTo1).getTime() / 1000)
    const diff = timeTodate - timeFromdate
    const totalTime = (diff / 3600 % 24)
    const totalAmount = totalTime * field.price
    const tempTime = `${totalTime}h`

    const NumberFrom = timeFrom1.hour() * 100 + timeFrom1.minute()
    const NumberTo = timeTo1.hour() * 100 + timeTo1.minute()

    if (NumberTo - NumberFrom == 70) {
      setErrorDate('Phải đặt tối thiểu 1h')
      setValidTime(false)
      return false
    } else
      if (NumberTo - NumberFrom <= 0) {
        setErrorDate('Thời gian không hợp lệ')
        setValidTime(false)
        return false
      } else
        if (NumberTo - NumberFrom == 30) {
          setErrorDate('Phải đặt tối thiểu 1h')
          setValidTime(false)
          return false
        } else if (tempTime == '0h30') {
          setErrorDate('Phải đặt tối thiểu 1h')
        } else if (NumberTo - NumberFrom >= 500) {
          setValidTime(true)
          setTotalHours(tempTime)
          setTotalPrice(totalAmount)
          handleCheckDuplicate()
          return true
        } else {
          setValidTime(true)
          setTotalHours(tempTime)
          setTotalPrice(totalAmount)
          handleCheckDuplicate()
          return true
        }
  }
  const handleOptionChange = (e) => {
    setOptionField(e.target.value)
  }
  async function bookField() {
    const bookingDetails = {
      field: field.name,
      userId: JSON.parse(localStorage.getItem('user'))._id,
      fieldChildId: optionField,
      fromHours: timeFrom,
      toHours: timeTo,
      fieldId: field._id,
      totalPrice: totalPrice,
      totalHours: totalHours,
      date: new Date(bookingDate).toLocaleDateString('vi-VN', options)
    }
    try {
      const result = await axios.post(`${baseURL}/api/bookings/bookField`, bookingDetails)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setRecallApi(Math.random())
    if (!errorName && !errorPhone && validTime && checked) {
      setmessageSnack('Đặt sân thành công!')
      setOpenSnack(true)
      bookField()

    } else {
      setmessageStatus('error')
      setmessageSnack('Cần kiểm tra thời gian trước khi đặt sân')
      setOpenSnack(true)
    }
  }


  return (
    <>
      <React.Fragment>
        <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
          <Alert
            onClose={handleCloseSnack}
            severity={messageStatus}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {messageSnack ? messageSnack : null}
          </Alert>
        </Snackbar>
        <form form autoComplete='off' onSubmit={handleSubmit}>
          <Typography variant="h7" gutterBottom
            sx={{
              color: 'red'
            }}
          >
            Bạn muốn đặt sân, vui lòng Chọn ngày và Xem khung giờ trống!
          </Typography>
          <Grid container spacing={3} alignItems="center" sx={{ pt: 4 }}>
            <Grid item xs={12} sm={6} container alignItems="center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    disablePast
                    label="Ngày đặt"
                    format="DD/MM/YYYY"
                    value={dayjs(bookingDate)}
                    onChange={handleBookingDate}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={handleClickOpen}>Xem khung giờ trống</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="clubName"
                name="clubName"
                label="Tên đội"
                fullWidth
                autoComplete="given-name"
                variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Tên người đặt"
                fullWidth
                autoComplete="name"
                variant="outlined"
                value={name}
                onChange={handleValidateName}
                error={errorName}
                helperText={errorName ? 'Invalid Name' : ''} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Điện thoại liên hệ"
                fullWidth
                autoComplete="phone"
                variant="outlined"
                value={phone}
                onChange={handleValidatePhone}
                error={errorPhone}
                helperText={errorPhone ? 'Invalid phone number' : ''} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-select-currency"
                select
                label="Chọn sân"
                defaultValue=""
                fullWidth
                variant="outlined"
                onChange={handleOptionChange}
              >
                {/* {fieldChild ? fieldChild.map((option) => (
                  setOptionField(option._id)
                  return (<MenuItem key={option._id} value={option.name}>
                    {option.name}
                  </MenuItem>)
                )) : null} */}
                {fieldChild ? fieldChild.map((option) => {
                  // setOptionField(option._id)
                  return (
                    <MenuItem key={option._id} value={option._id}>
                      {option.name}
                    </MenuItem>
                  )
                }) : null}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={[' TimePicker']}>
                  <TimePicker
                    slotProps={{
                      textField: {
                        helperText: !validTime ? errorDate : '',
                        error: !validTime
                      }
                    }}
                    defaultValue={todayStartOfTheDay}
                    ampm={false}
                    // disablePast
                    // minTime={dayjs().set('hour', 7)}
                    // maxTime={dayjs().set('hour', 21)}
                    timeSteps={{ minutes: 30 }}
                    minutesStep={30}
                    value={timeFrom}
                    onChange={handleTimeFrom}
                    label="Đặt từ"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={[' TimePicker']}>
                  <TimePicker
                    slotProps={{
                      textField: {
                        helperText: !validTime ? errorDate : '',
                        error: !validTime
                      }
                    }}
                    defaultValue={todayStartOfTheDay}
                    ampm={false}
                    // disablePast
                    // minTime={dayjs().set('hour', 8)}
                    // maxTime={dayjs().set('hour', 22)}
                    minutesStep={30}
                    timeSteps={{ minutes: 30 }}
                    value={timeTo}
                    onChange={handleTimeTo}
                    label="Đến" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleCheckTime}>Kiểm tra</Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button variant="contained" type='submit'>Đặt sân</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" gutterBottom sx={{ color: 'red' }}>
                Thanh toán online bằng việc bấm vào Tiếp
              </Typography>
            </Grid>
          </Grid>
        </form>
        {/* Dialog */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth
          maxWidth={'lg'}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Xem khung giờ trống
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
            <Grid container spacing={2} columns={12}>
              <Grid item xs={9} sx={{ textAlign: 'center' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight={'bold'}
                  pb={'20px'}
                  pt={'10px'}
                  color={'black'}
                >
                  {
                    new Date(checkDate).toLocaleDateString('vi-VN', options)
                      ? new Date(checkDate).toLocaleDateString('vi-VN', options)
                      : new Date(checkDate).toLocaleDateString('vi-VN', options)
                  }
                </Typography>
              </Grid>
              <Grid item xs={3} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={[' DatePicker']}>
                    <DatePicker
                      defaultValue={dayjs(new Date())}
                      format='DD/MM/YYYY'
                      value={dayjs(checkDate)}
                      onChange={(value) => handleCheckDate(value)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={5} columns={12}>
              {fieldChild ? fieldChild.map((child) => {
                // console.log(child)
                return (
                  <Grid key={child._id} item xs={6} sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'Bold', marginBottom: 3 }}>
                      {child.name}
                    </Typography>
                    <Box>
                      <Box>
                        {child.currentBooking.map(booking => {
                          // console.log(booking)
                          if (new Date(checkDate).toLocaleDateString('vi-VN', options) == booking.date) {
                            return (
                              <Typography
                                key={booking._id}
                                gutterBottom
                                variant="h6"
                                component="div"
                                sx={{
                                  marginBottom: 3,
                                  boxShadow: 'var(--mui-shadows-2)',
                                  borderRadius: 2,
                                  padding: '5px 15px',
                                  display: 'block',
                                  fontWeight: 'Bold',
                                  backgroundColor: 'var(--mui-palette-primary-main)',
                                  color: 'var(--mui-palette-primary-contrastText)'
                                }}
                              >
                                Đã đặt từ {booking.fromHours} đến {booking.toHours}
                              </Typography>)
                          } else {
                            return null
                          }
                        })}
                      </Box>
                    </Box>
                  </Grid>)
              }) : null}
            </Grid>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment >
    </>
  )
}