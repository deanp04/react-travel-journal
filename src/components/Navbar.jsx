import React from "react";
import LOTRLogo from "../images/lotr-logo.png";

export default function Navbar() {
	return (
		<nav>
			<img className="header-logo" src={LOTRLogo} />
		</nav>
	);
}