import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
const defaultTheme = createTheme()

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [firstnameError, setFirstnameError] = useState('')
  const [lastnameError, setLastnameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const navigate = useNavigate()

  const validateField = (fieldName, value) => {
    switch (fieldName) {
    case 'username':
      setUsername(value)
      if (value.trim() !== '') {
        setUsernameError('')
      }
      break
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
    case 'firstname':
      setFirstname(value)
      if (value.trim() !== '') {
        setFirstnameError('')
      }
      break
    case 'lastname':
      setLastname(value)
      if (value.trim() !== '') {
        setLastnameError('')
      }
      break
    case 'phone':
      setPhone(value)
      if (value.trim() !== '') {
        setPhoneError('')
      }
      break
    case 'email':
      setEmail(value)
      if (value.trim() !== '') {
        setEmailError('')
      }
      break
    default:
      break
    }
  }

  const handleFieldChange = (fieldName, value) => {
    validateField(fieldName, value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('http://localhost:3000/users/signup', {
        username,
        password,
        firstname,
        lastname,
        phone,
        email,
        confirmPassword
      })
      // Nếu request thành công, chuyển hướng đến trang login
      navigate('/login')
    } catch (error) {
      // Xử lý lỗi từ phản hồi API
      if (error.response && error.response.data) {
        const { error: errors } = error.response.data
        errors.forEach(err => {
          switch (err.path) {
          case 'username':
            setUsernameError(err.msg)
            break
          case 'password':
            setPasswordError(err.msg)
            break
          case 'confirmPassword':
            setConfirmPasswordError(err.msg)
            break
          case 'firstname':
            setFirstnameError(err.msg)
            break
          case 'lastname':
            setLastnameError(err.msg)
            break
          case 'phone':
            setPhoneError(err.msg)
            break
          case 'email':
            setEmailError(err.msg)
            break
          default:
            break
          }
        })
      }
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Signup
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="username"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    autoFocus
                    onChange={(e) => handleFieldChange('username', e.target.value)}
                    error={!!usernameError}
                    helperText={usernameError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    onChange={(e) => handleFieldChange('firstname', e.target.value)}
                    error={!!firstnameError}
                    helperText={firstnameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    onChange={(e) => handleFieldChange('lastname', e.target.value)}
                    error={!!lastnameError}
                    helperText={lastnameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    error={!!phoneError}
                    helperText={phoneError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I confirm that the above information is correct"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
