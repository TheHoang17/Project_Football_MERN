import { useState } from 'react'
import ModeSelect from '~/components/AppBar/ModeSelect/ModeSelect'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Introduce from './Menus/Introduce'
import News from './Menus/News'
import Booking from './Menus/Booking'
import Templates from './Menus/Templates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Avatar from '@mui/material/Avatar'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Shop from './Menus/Shop'

function AppBar() {
  const [searchValue, setSearchValue]= useState('')
  return (
    <Box sx={{
      // backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      paddingX: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50': 'red')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* <AppsIcon sx={{ color:'white' }} /> */}
        <Avatar alt="Remy Sharp" src='https://i.pinimg.com/736x/30/b5/49/30b54999b098050158ed13a1ecdcaab0.jpg' />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color:'white' }}>
            ABC</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:1 }}>
          <Link to="/">
            <Button sx={{
              color: 'white'
            }} startIcon={<HomeIcon sx= {{ paddingBottom:'2px' }} />}>Trang chủ</Button>
          </Link>
          <Introduce />
          <News />
          <Booking />
          <Templates />
          <Shop/>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon
                fontSize='small'
                sx= {{ color: searchValue ? 'white' : 'transparent', cursor:'pointer' }}
                onClick ={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth:'120px',
            maxWidth:'170px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root':{
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }} />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsNoneIcon sx={{ color:'white' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color:'white' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box >
  )
}

export default AppBar