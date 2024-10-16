import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import ShoppingList from './components/ShoppingList';
import DarkModeToggle from './components/DarkModeToggle';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <Router>
      <div className="app">
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="*" element={<NotFound />} /> {/* route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
