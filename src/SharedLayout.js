import { Link, Outlet } from 'react-router-dom';
import Navbar from './navigation/Navigation';

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
