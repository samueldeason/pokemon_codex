import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="navbar">
            <h3>Pokedex Go</h3>
            <div className="navlinks">
                <NavLink exact to="/" className="navbarlink" activeClassName="activenavlink">Home</NavLink>
                <NavLink exact to="/pokedex" className="navbarlink" activeClassName="activenavlink">Pokedex</NavLink>
            </div>
        </div>
    )
}
export default Navbar;