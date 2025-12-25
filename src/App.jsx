import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Beginners from './pages/Beginners';
import SectionDetail from './pages/SectionDetail';
import Exam from './pages/Exam';
import './index.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/principiantes" element={<Beginners />} />
            <Route path="/seccion/:sectionId" element={<SectionDetail />} />
            <Route path="/examen/:sectionId" element={<Exam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

