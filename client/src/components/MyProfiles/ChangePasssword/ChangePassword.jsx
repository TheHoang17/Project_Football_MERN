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
import axios from 'axios'
import Grid from '@mui/material/Grid'

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
  const [successMessage, setSuccessMessage] = useState('');

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('')

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'password':
        setNewPassword(value)
        if (value.trim() !== '') {
          setNewPasswordError('')
        }
        break
      case 'confirmPassword':
        setConfirmNewPassword(value)
        if (value.trim() !== '' && value === newPassword) {
          setConfirmNewPasswordError('')
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
    setShowNewPassword(!showNewPassword)
  }
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword)
  }

  const handleToggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword)
  }
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  const handleChangePass = async (event) => {
    event.preventDefault()
    if (confirmNewPassword !== newPassword) {
      setConfirmNewPasswordError('Passwords do not match');
      return;
    } else {
      setConfirmNewPasswordError('');
    }
  
    try {
      const response = await axios.put('http://localhost:3000/users/changePassword', {
        oldPassword, newPassword, confirmNewPassword
      }, config)
      setSuccessMessage('Change password successfully')
    } catch (error) {
      // Xử lý lỗi từ phản hồi API
      if (error.response && error.response.data) {
        const { errors } = error.response.data
        if (errors && Array.isArray(errors)) {
          errors.forEach(err => {
            switch (err.path) {
              case 'newPassword':
                setNewPasswordError(err.msg)
                break
              case 'confirmNewPassword':
                setConfirmNewPasswordError(err.msg)
                break
              default:
                break
            }
          })
        }
      }
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
          <Container maxWidth='lg' onSubmit={handleChangePass} sx={{ mt: 4, mb: 4 }}>
            <Paper>
              <Box component="form" noValidate sx={{ mt: 1, p: 5 }}>
                <TextField
                  fullWidth
                  required
                  name="oldPassword"
                  label="Old Password"
                  type={showOldPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleFieldChange('password', e.target.value)}
                  error={!!oldPasswordError}
                  helperText={oldPasswordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleToggleOldPasswordVisibility}
                          edge="end"
                        >
                          {showOldPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{ mb: 4 }}

                />
                <TextField
                  fullWidth
                  required
                  name="newPassword"
                  label="New Password"
                  type={showNewPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleFieldChange('password', e.target.value)}
                  error={!!newPasswordError}
                  helperText={newPasswordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{ mb: 4 }}

                />

                <TextField
                  required
                  fullWidth
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  type={showConfirmNewPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                  error={!!confirmNewPasswordError}
                  helperText={confirmNewPasswordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Box sx={{ mt: 4 }}>
                  <TextField label='Enter your OTP  ' />
                  <Button variant="contained" sx={{ ml: 5, mt: 1.2, backgroundColor: 'red' }}>Send OTP</Button>
                </Box>

                <Grid container spacing={2} item xs={12}>
                  <Grid item xs={3}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 4 }}>Change my password</Button>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body1" color="green" sx={{ mt: 5 }}>
                      {successMessage}
                    </Typography>
                  </Grid>
                </Grid>

              </Box>
            </Paper>

          </Container>
        </Box>
      </Box>
    </ThemeProvider>

  )
}
