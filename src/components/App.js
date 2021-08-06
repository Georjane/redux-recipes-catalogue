import '../App.css';
import { Link } from 'react-router-dom';
import MealList from '../containers/MealList';

function App() {
  return (
    <div className="App">
      Catalogue of Recipes
      <Link to="/details"><MealList /></Link>
    </div>
  );
}

export default App;
