import { Link, Outlet } from 'react-router-dom';
import './navigation.css';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'></div>
        <div className='links-container'>
          <ul className='links'>
            <Link to='/'>main</Link>
            <Link to='/currency '>currency</Link>
            <Link to='/about'>About</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
