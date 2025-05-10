import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import ResumePage from "./layouts/resume";
import ContactPage from "./layouts/contact";
import ActivitiesPage from "./layouts/activities";
import AboutPage from "./layouts/about";
import NavButton from "./components/navButton/NavButton";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
        <Footer />
        <NavButton />
      </div>
    </Router>
  );
}

export default App;
