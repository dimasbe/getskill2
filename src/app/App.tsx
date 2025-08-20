import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../style/App.css'
import GuestLayout from './routes/GuestLayout'
import Landingpage from '../page/guest/LandingPage/Landingpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Landingpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
