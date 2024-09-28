import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import PatientRegistration from "./Pages/PatientRegistration/BookAppointment";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]); // Whenever the route/pathname changes

  return null;
};
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
          <Route
            path="/PatientRegistration"
            element={<PatientRegistration />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
