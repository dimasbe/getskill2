import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/App.css";

// Layout
import GuestLayout from "./routes/GuestLayout";

// Pages
import Landingpage from "../page/guest/LandingPage/Landingpage";
import IndustrialClass from "../page/guest/IndustrialClass/kelasIndustri";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Semua route yang pakai GuestLayout */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/industrial-class" element={<IndustrialClass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
