import { HashRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/booking";
import BookingDate from "./pages/bookingDate";
import BookingHour from "./pages/bookingHour";
import SignIn from "./pages/signIn";
import BookingService from "./pages/bookingService";
import BookingProfessional from "./pages/bookingProfessional";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import BookingSummary from "./pages/bookingSummary";
import ShopSelection from "./pages/bookingShop";
import Register from "./pages/register";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<ShopSelection />} />
          <Route path="/shops/:id" element={<Booking />} />
          <Route path="/booking-service" element={<BookingService />} />
          <Route
            path="/booking-professional"
            element={<BookingProfessional />}
          />
          <Route path="/booking-date" element={<BookingDate />} />
          <Route path="/booking-hour" element={<BookingHour />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
