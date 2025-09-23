import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Documentation from '@/pages/Documentation';
import Footer from '@/Footer';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Changelog from '@/pages/Changelog';
import Partners from '@/pages/Partners';
import Support from '@/pages/Support';
import Careers from './pages/Careers';
import Roadmap from './pages/Roadmap';

function App() {

  return (
    <Router>
      <div className="bg-gradient-to-b from-white to-gray-200 font-sans min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/documentation" element={<Documentation />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/roadmap" element={<Roadmap />} />

          <Route path="/partners" element={<Partners />} />
          <Route path="/support" element={<Support />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;