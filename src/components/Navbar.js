import { Link } from 'react-router-dom';
// import CategoryFilter from './CategoryFilter';

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <Link to="/">Meals </Link>
        <Link to="/details">Details</Link>
        {/* <CategoryFilter /> */}
      </div>
    </div>
  );
}

export default Navbar;
