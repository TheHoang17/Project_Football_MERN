import React, { useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '../Drawer/Drawer'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import Input from '@mui/material/Input'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


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

export default function About() {
  const [open, setOpen] = React.useState(true)
  const [isEditing, setIsEditing] = React.useState(false)
  const [successMessage, setSuccessMessage] = useState('');

  //state
  const [firstname, setFirstName] = useState(user.firstname)
  const [email, setEmail] = useState(user.email)
  const [lastname, setLastName] = useState(user.lastname)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)
  const [birthday, setBirthday] = useState(user.birthday)
  const [age, setAge] = useState(user.age)

  //upload
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const toggleDrawer = () => {
    setOpen(!open)
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
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put('http://localhost:3000/users/about', {
        firstname,
        lastname,
        phone,
        email,
        address,
        age,
        birthday
      }, config)
      if (response.data.success) {
        // Cập nhật dữ liệu người dùng trong Local Storage
        const updatedUser = {
          ...user,
          firstname,
          lastname,
          phone,
          email,
          address,
          age,
          birthday
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setIsEditing(false)
        setSuccessMessage('User profile updated successfully');
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Update failed:', error);
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
              About
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
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} >

                <Box sx={{ mb: 2, textAlign: 'right' }}>
                  <Button startIcon={<EditIcon />} variant='contained' onClick={handleEditClick}>Edit</Button>
                </Box>

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <img src={`${user.avatar}`} style={{ height: '280px', width: '100%', borderRadius: 5, marginBottom: 10 }} />
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        style={{ left: '25%' }}>
                          Upload file
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={9} container spacing={2} >
                      <Grid item xs={12} md={6} >
                        <label> Firstname <Input fullWidth value={firstname} disabled={!isEditing} onChange={e => setFirstName(e.target.value)} /></label><br /><br />
                        <label> Lastname <Input fullWidth value={lastname} disabled={!isEditing} onChange={e => setLastName(e.target.value)} /></label><br /><br />
                        <label> Birthday<Input fullWidth value={birthday} disabled={!isEditing} onChange={e => setBirthday(e.target.value)} /></label><br /><br />
                        <label> Email <Input fullWidth value={email} disabled={!isEditing} onChange={e => setEmail(e.target.value)} /></label>
                        {!isEditing ? (
                          <Typography variant="body1" color="green" mt='20px' >
                            {successMessage}
                          </Typography>
                        ) : ''}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <label> Phone <Input fullWidth value={phone} disabled={!isEditing} onChange={e => setPhone(e.target.value)} /></label><br /><br />
                        <label> Address <Input fullWidth value={address} disabled={!isEditing} onChange={e => setAddress(e.target.value)} /></label><br /><br />
                        <label> Age <Input fullWidth value={age} disabled={!isEditing} onChange={e => setAge(e.target.value)} /></label>

                      </Grid>
                    </Grid>
                  </Grid>

                  {isEditing && (
                    <Box sx={{ mt: 2, textAlign: 'right' }}>
                      <Button variant='outlined' onClick={handleBackEditClick} sx={{ mr: '20px' }}>Cancel</Button>
                      <Button variant='contained' onClick={handleSubmit}>Save</Button>
                    </Box>
                  )}

                </Paper>

              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>

  )
}
