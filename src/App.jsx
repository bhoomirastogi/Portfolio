import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Techstack from './Components/Techstack';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Work />
              <Techstack />
              <Contact />
            </>
          }
        />
        <Route path="/gallery/:projectId" element={<Gallery />} />  {/* Dynamic Gallery Route */}
      </Routes>
    </Router>
  );
}

export default App;
