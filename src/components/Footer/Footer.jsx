import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook'
export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? 'black'
              : 'black'
        }}
      >
        <Container maxWidth="sm">
          <Button sx={{ color:'white' }}>
            SÂN BÓNG CỎ NHÂN TẠO MANCHESTER UNITED
          </Button>
          <Button startIcon={<LocationOnIcon />} sx={{ color:'white' }}>
          Địa chỉ: Trường đại học FPT Đà Nẵng
          </Button>
          <Button startIcon={<LocalPhoneIcon />} sx={{ color:'white' }}>
          Điện thoại: 0123456789
          </Button>
          <Button startIcon={<EmailIcon />} sx={{ color:'white' }}>
          Email: sanbongMU@gmail.com
          </Button>
          <Button startIcon={<FacebookIcon />} sx={{ color:'white' }}>
          Sân bóng phủi Manchester United
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
