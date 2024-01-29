import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
function App() {
  return (
    <>
      <div>The Hoang</div>
      <Typography variant="body2" color="text.secondary">Nguỷn</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='success'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
      <br/>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[700] }} />
    </>
  )
}

export default App

