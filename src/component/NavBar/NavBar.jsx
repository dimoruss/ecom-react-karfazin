import React from "react";
import CartWidget from "../CarWidget/CarWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<NavLink className="nav__link" to="/">RUSS Games</NavLink>
				</div>
					<ul className="nav__list">
						<li>
							<NavLink className="nav__link" to="/categoria/games">Juegos</NavLink>
						</li>
						<li>
							<NavLink className="nav__link" to="/categoria/accesorios">Accesorios</NavLink>
						</li>
						<li>
							<NavLink className="nav__link" to="cart"><CartWidget />
						</NavLink>
						</li>
					</ul>
				</nav>
			</div>
	);
};
export default NavBar;