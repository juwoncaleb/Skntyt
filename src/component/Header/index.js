import React from 'react'
import "./style/Header.css"
function Header() {
	return (
		<>
			<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
			<label for="menu-icon"></label>
			<nav class="nav">
				<ul class="pt-5">
					<li><a href="#">Work-plan</a></li>
					<li><a href="#">Meal-plan</a></li>
					<li><a href="#">Sell</a></li>
					<li><a href="#">join us</a></li>
				</ul>
			</nav>

		</>
	)
}

export default Header

