import '../index.css';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.tsx'

export default function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div> 
  );
}

