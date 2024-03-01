import AppBar from '../AppBar/AppBar'
import News from './News/News'
import Footer from '../Footer/Footer'
import BoardBar from './BoardBar/BoardBar'
import Accessory from './Accessory/Accessory'


function Home() {
  return (
    <>
      <AppBar />
      <BoardBar />
      <News />
      <Accessory />
      <Footer />
    </>
  )
}

export default Home