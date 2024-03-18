import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Profiles() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')

  }
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt="Avatar"
            src={user.avatar}
          />
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-menu-profiles'
        }}
      >
        <MenuItem sx={{
          fontWeight: 'bold'
        }}>
          Hello {user.firstname} {user.lastname} !!
        </MenuItem>
        {/* Go to Profile */}
        <Link to="/profile">
          <MenuItem onClick={handleClose}>
            <Avatar
              sx={{ width: 28, height: 28, mr: 2 }}
              alt="Avatar"
              src={user.avatar}
            /> Hồ sơ
          </MenuItem>
        </Link>
        <Link to="/bookingDetails">
          <MenuItem onClick={handleClose}>
            Chi tiết đặt sân
          </MenuItem>
        </Link>

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Cài đặt
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles