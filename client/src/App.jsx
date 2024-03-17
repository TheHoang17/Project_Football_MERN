import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Checkout from '~/components/FormBooking/Checkout'
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Shop from './components/Shop/Shop'
import DetailsProfile from './components/MyProfiles/MyProfiles'
import About from './components/MyProfiles/About/About'
import ChangePassword from './components/MyProfiles/ChangePasssword/ChangePassword'
import AdminProfiles from './components/Admin/AdminProfiles'
import ManageAccount from './components/Admin/ManageAccount/ManageAccount'
import ManageFields from './components/Admin/ManageFields/ManageFields'
import Dashboard from './components/Admin/DashBoard/DashBoard'

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
          <Route path='/profile' element={<DetailsProfile />} />
          <Route path='/about' element={<About />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/admin' element={<AdminProfiles />} />
          <Route path='/manageAccount' element={<ManageAccount />} />
          <Route path='/manageFields' element={<ManageFields />} />
          <Route path='/dashboard' element={<Dashboard />} />

          
        </Routes>
      </Container>
    </Router>
  )
}

export default App
