import { Link } from "react-router-dom";
import './Navbar.css'

const buttonStyle = " hover:bg-white hover:text-black p-3 text-white";
const linkStyle = "w-fit";

const Navbar = () => {
  return (
    <nav className="p-4 flex basis-1/5 gap-2 flex-row md:flex-col nav-container">
      <Link to="/contacts" className={linkStyle}>
        <button className={buttonStyle}>Contact</button>
      </Link>
      <Link to="/chartandmaps" className={linkStyle}>
        <button className={buttonStyle}>Charts and Maps</button>
      </Link>
    </nav>
  );
};

export default Navbar;