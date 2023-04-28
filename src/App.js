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
import BookingCheckout from "./pages/bookingCheckout";
import BookingCompleted from "./pages/bookingCompleted";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<ShopSelection />} />
          <Route path="/shops/:id" element={<Booking />} />
          <Route
            path="/shops/:id/booking-service"
            element={<BookingService />}
          />
          <Route
            path="/shops/:id/booking-professional"
            element={<BookingProfessional />}
          />
          <Route path="/shops/:id/booking-date" element={<BookingDate />} />
          <Route path="/shops/:id/booking-hour" element={<BookingHour />} />
          <Route
            path="/shops/:id/booking-summary"
            element={<BookingSummary />}
          />
          <Route path="/shops/:id/signin" element={<SignIn />} />
          <Route path="/shops/:id/register" element={<Register />} />
          <Route
            path="/shops/:id/booking-checkout"
            element={<BookingCheckout />}
          />
          <Route
            path="/shops/:id/booking-completed"
            element={<BookingCompleted />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
