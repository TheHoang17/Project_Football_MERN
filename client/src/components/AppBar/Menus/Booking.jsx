import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <Box>
      <Link to='/field'>
        <Button
          sx={{ color: 'white' }}
          id="basic-button-starred"
          onClick
        >
          Đặt sân
        </Button>
      </Link>
    </Box>
  )
}

export default Booking