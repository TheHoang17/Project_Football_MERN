import React from 'react'
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


export default function Booking() {
  const currencies = [
    {
      value: '5',
      label: 'Sân 5 người'
    },
    {
      value: '7',
      label: 'Sân 7 người'
    },
    {
      value: '11',
      label: 'Sân 11 người'
    }
  ]
  const today = dayjs()
  const todayStartOfTheDay = today.startOf('day')
  return (
    <React.Fragment>
      <Typography variant="h7" gutterBottom
        sx = {{
          color: 'red'
        }}
      >
      Bạn muốn đặt sân, vui lòng Chọn ngày và Xem khung giờ trống!
      </Typography>

      <Grid container spacing={3} alignItems="center" sx = {{ pt:4 }}>
        <Grid item xs={12} sm={6} container alignItems="center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Ngày đặt" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Button variant="contained">Xem khung giờ trống</Button>
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="clubName"
            name="clubName"
            label="Tên đội"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
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
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Điện thoại liên hệ"
            fullWidth
            autoComplete="phone"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-select-currency"
            select
            label="Chọn sân"
            defaultValue=""
            fullWidth
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={[' TimePicker']}>
              <TimePicker defaultValue={todayStartOfTheDay} disablePast label="Đặt từ" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={[' TimePicker']}>
              <TimePicker defaultValue={todayStartOfTheDay} disablePast label="Đến" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} >
          <Button variant="contained">Kiểm tra</Button>
        </Grid>

        <Grid item xs={12} >
          <TextField
            id="note"
            name="note"
            label="Ghi chú"
            fullWidth
            autoComplete="note"
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12} >
          <Typography variant="h7" gutterBottom>
            Xác nhận đặt sân bằng việc bấm vào Tiếp
          </Typography>
        </Grid> */}

      </Grid>
    </React.Fragment>
  )
}
