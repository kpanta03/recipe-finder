
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Recipes from './Components/Recipes';

function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;
