import React, { useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '../Drawer/Drawer'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { Input } from '@mui/material'

const drawerWidth = 240
const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }),

  backgroundColor: theme.palette.mode === 'dark' ? '#2c3e50' : 'red' // Màu giống AppBar mới
}))

const defaultTheme = createTheme()

export default function ChangePassword() {
  const [open, setOpen] = React.useState(true)
  const [isEditing, setIsEditing] = React.useState(false)
  const [successMessage, setSuccessMessage] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  //state
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const validateField = (fieldName, value) => {
    switch (fieldName) {
    case 'password':
      setPassword(value)
      if (value.trim() !== '') {
        setPasswordError('')
      }
      break
    case 'confirmPassword':
      setConfirmPassword(value)
      if (value.trim() !== '' && value === password) {
        setConfirmPasswordError('')
      }
      break

    default:
      break
    }
  }
  const handleFieldChange = (fieldName, value) => {
    validateField(fieldName, value)
  }
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const handleEditClick = () => {
    setIsEditing(true)
  }
  const handleBackEditClick = () => {
    setIsEditing(false)
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }


  return (

    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position='absolute' open={open} backgroundColor>
          <Toolbar
            sx={{
              pr: '24px' // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Change Password
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Paper>
              <Box component="form" noValidate sx={{ mt: 1, p:5 }}>
                <TextField
                  fullWidth
                  required
                  name="password"
                  label="New Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleFieldChange('password', e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{ mb: 4 }}

                />

                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm New Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Box sx={{ mt:4 }}>
                  <TextField label='Enter your OTP  '/>
                  <Button variant="contained" sx={{ ml:5, mt:1.2, backgroundColor:'red'}}>Send OTP</Button>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 4 }}
                >
                  Change my password
                </Button>

              </Box>
            </Paper>

          </Container>
        </Box>
      </Box>
    </ThemeProvider>

  )
}
