import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return(
        <div className="navbar">
            <Link to="">
                Neighborhood-Board
            </Link>        
            <Link to="/create">Create</Link>
        </div>
    ); 
}