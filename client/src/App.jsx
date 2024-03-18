import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Checkout from '~/components/FormBooking/Checkout'
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Shop from './components/Shop/Shop'
import DetailsProfile from './components/MyProfiles/MyProfiles'
import About from './components/MyProfiles/About/About'
import Field from './components/Field/Field'
import ChangePassword from './components/MyProfiles/ChangePasssword/ChangePassword'
import AdminProfiles from './components/Admin/AdminProfiles'
import ManageAccount from './components/Admin/ManageAccount/ManageAccount'
import ManageFields from './components/Admin/ManageFields/ManageFields'
import ManageAccessory from './components/Admin/ManageAccessory/ManageAccessory'

import Dashboard from './components/Admin/DashBoard/DashBoard'
import BookingDetail from './components/BookingDetail/BookingDetail'

function App() {
  return (
    <Router> {/* Wrap everything in the Router component */}
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking/:id' element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/profile' element={<DetailsProfile />} />
          <Route path='/about' element={<About />} />
          <Route path='/field' element={<Field />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/admin' element={<AdminProfiles />} />
          <Route path='/manageAccount' element={<ManageAccount />} />
          <Route path='/manageFields' element={<ManageFields />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/bookingDetails' element={<BookingDetail />} />
          <Route path='/manageAccessory' element={<ManageAccessory />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
