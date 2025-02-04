
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Recipes from './Components/Recipes';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Favourite from './Components/Favourite';
import RecipeDetail from './Components/RecipeDetail';



function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/recipeDetail/:recipeId" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;
