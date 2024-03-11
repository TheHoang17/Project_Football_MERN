import { useState } from 'react'
import { Box, Link, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
function Filter() {
  const [searchValue, setSearchValue]= useState('')
  return (
    <Box>
      <Box>
        <TextField
          id='outlined-search'
          label='Search...'
          type='text'
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'black' }}/>
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon
                fontSize='small'
                sx= {{ color: searchValue ? 'black' : 'transparent', cursor:'pointer' }}
                onClick ={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            '& label': { color: 'black' },
            '& input': { color: 'black' },
            '& label.Mui-focused': { color: 'black' },
            '& .MuiOutlinedInput-root':{
              '& fieldset': { borderColor: 'black' },
              '&:hover fieldset': { borderColor: 'black' },
              '&.Mui-focused fieldset': { borderColor: 'black' }
            }
          }} />
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        <Typography gutterBottom variant='h6' component='div' m={ '0' }>
          Gender/Age
        </Typography>
        <Box>
          <Box sx={{ margin: '10px 0' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px', color: 'red' }}>Men</Link>
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Women</Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderTop: '1px solid #0000006b' }}></Box>
      <Box sx={{ marginTop: '10px' }}>
        <Typography gutterBottom variant='h6' component='div' m={ '0' } >
          Featured Departments
        </Typography>
        <Box >
          <Box sx={{ margin: '10px 0' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Training</Link>
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Sale Items</Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderTop: '1px solid #0000006b' }}></Box>
      <Box sx={{ marginTop: '10px' }}>
        <Typography gutterBottom variant='h6' component='div' m={ '0' } >
          All Departments
        </Typography>
        <Box >
          <Box sx={{ margin: '10px 0' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Equipment</Link>
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Jackets</Link>
          </Box>
          <Box sx={{ margin: '10px 0' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Tops</Link>
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Training</Link>
          </Box>
          <Box sx={{ margin: '10px 0' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Trousers & Shorts</Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderTop: '1px solid #0000006b' }}></Box>
      <Box sx={{ marginTop: '10px' }}>
        <Typography gutterBottom variant='h6' component='div' m={ '0' } >
          Featured Brands
        </Typography>
        <Box >
          <Box sx={{ margin: '10px 0' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Adidas</Link>
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Link href='#' underline='none' color='inherit' sx={{ '&:hover': { bgcolor: 'black', color: 'white' }, padding: '5px 10px', borderRadius: '5px' }}>Nike</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Filter