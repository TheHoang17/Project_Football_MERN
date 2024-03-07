import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <Box>
      <Link to="/Shop">
        <Button
          sx={{ color: 'white' }}
          id="basic-button-templates" 
          onClick
        >
          Cửa hàng
        </Button>
      </Link>
    </Box>
  )
}

export default Shop