import React from "react";
import CartWidget from "../CarWidget/CarWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
			<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
				<div class="container-fluid nav__brand">
					<NavLink className="nav__link navbar-brand" to="/">RUSS Games</NavLink>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<ul class="navbar-nav nav__list">
									<li class="nav-item">
										<NavLink className="nav__link nav-link" to="/categoria/games">Juegos</NavLink>
									</li>
									<li class="nav-item">
										<NavLink className="nav__link nav-link" to="/categoria/accesorios">Accesorios</NavLink>
									</li>
									<li class="nav-item">
										<NavLink className="nav__link nav-link" to="cart"><CartWidget /></NavLink>
									</li>
								</ul>
							</div>
						</div>
					</nav>
	);
};
export default NavBar;






