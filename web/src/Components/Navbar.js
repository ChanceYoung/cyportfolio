import { NavLink } from 'react-router-dom'
import AuthenticationButton from './Auth/buttons/full-button'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="rounded bg-secondary" to="/">
                    <img
                        src="https://images2.imgbox.com/6a/91/zvA8P9Va_o.png"
                        alt="image host"
                    />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav ps-2">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutme">
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <AuthenticationButton />
                        </li>
                    </ul>
                </div>
                <h1 className="line-1 anim-typewriter p-1">
                    Chance Young Web Development
                </h1>
            </div>
        </nav>
    )
}

export default Navbar
