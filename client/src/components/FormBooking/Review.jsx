import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const baseURL = 'http://localhost:3000'


export default function Review() {

  const userId = JSON.parse(localStorage.getItem('user'))._id
  const [bookings, setBooking] = useState(null)

  useEffect(() => {
    axios.get(`${baseURL}/api/bookings/getBookings/${userId}`)
      .then(response => {
        console.log(response.data)
        setBooking(response.data)
      })
      .catch(error => console.log(error))
  }, [userId])
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Chi tiết đặt sân
      </Typography>
      <List disablePadding>
        {bookings ? bookings.map((booking) => (
          <ListItem key={booking._id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={booking.field} secondary={`${booking.fromHours} - ${booking.toHours}`} />
            <Typography variant="body2">{booking.totalHours}</Typography>
          </ListItem>
        )) : 'Không có mã đơn nào được đặt'}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Tổng cộng" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {bookings ? (bookings[0].totalPrice / 100).toLocaleString('vi-VN') : null} VNĐ
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  )
}
