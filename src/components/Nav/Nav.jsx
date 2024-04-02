import './Nav.css'
import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
      <nav>
      <Link to="/">
        8Bit Sketch
      </Link>
      <ul>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
      </ul>
    </nav>
    );
  }
  
  export default Nav;