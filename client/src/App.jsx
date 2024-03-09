import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Checkout from '~/components/FormBooking/Checkout'
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <Router> {/* Wrap everything in the Router component */}
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Checkout />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/signup" element={<Signup />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
