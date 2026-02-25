import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Layout wrapper to handle Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <>
      <Navbar />
      
      {/* 👇 ADD THIS BLOCK HERE. It creates the premium glow for all pages. */}
      <div
  style={{
    position: "fixed",
    inset: 0,
    zIndex: -100,

    background: `

      radial-gradient(
        900px 500px at 20% 10%,
        rgba(0,198,255,0.10),
        transparent 60%
      ),

      radial-gradient(
        700px 400px at 80% 30%,
        rgba(0,114,255,0.08),
        transparent 60%
      ),

      linear-gradient(
        180deg,
        #050a14 0%,
        #070d18 40%,
        #050a14 100%
      )

    `,

  }}
/>
      {/* 👆 END OF BACKGROUND BLOCK */}

      {children}
      {showFooter && <Footer />}
    </>
  );
};
function App() {
  return (
    
  <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
  