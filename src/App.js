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
import ShopSelection from "./pages/Shops";
import Register from "./pages/register";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<ShopSelection />} />
          <Route path="/shops/:id" element={<Booking />} />
          <Route path="/:id/booking-service" element={<BookingService />} />
          <Route
            path="/:id/booking-professional"
            element={<BookingProfessional />}
          />
          <Route path="/:id/booking-date" element={<BookingDate />} />
          <Route path="/:id/booking-hour" element={<BookingHour />} />
          <Route path="/:id/booking-summary" element={<BookingSummary />} />
          <Route path="/:id/signin" element={<SignIn />} />
          <Route path="/:id/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
