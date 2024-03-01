import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Checkout from '~/components/FormBooking/Checkout'
import Home from './components/Home/Home'

function App() {
  return (
    <Router> {/* Wrap everything in the Router component */}
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Checkout />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
