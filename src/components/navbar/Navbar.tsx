import { Link } from "react-router-dom";

       
import './Navbar.css'

export default function Navbar(){

    return(
        <div className="navbar">
           <nav>
            <Link to="/" className="brand">
                <h1>Welcome to Pizzame</h1>
            </Link>
           <Link to="/create">
                Add Recipe
           </Link>
           </nav>
        </div>
    )
}