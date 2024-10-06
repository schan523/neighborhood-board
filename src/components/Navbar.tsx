import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="link-border">
                <Link to="">
                    <span>Neighborhood-Board</span>
                </Link>  
            </div>
            <div className="link-border">
                <Link to="/create"><span>Create</span></Link>
            </div>
            <div className="link-border">
                <Link to="/noticed"><span>Noticed</span></Link>
            </div>
        </div>
    ); 
}