import {Link} from "react-router-dom";

function NavButton({ icon: Icon, label, showLabel, destination }) {
	return (
		// React Router Link component for client-side navigation
		<Link className="nav-button" to={destination}>
			{/* Optional icon */}
			{Icon && <Icon className="icon" />}

			{/* Button label renders conditionally */}
			<div
				style={{
					width: showLabel ? "200px" : "0px",
					transition: "width 0.2s ease-in-out",
					overflow: "hidden",
				}}
			>
				<p className="button-text">{label}</p>
			</div>
		</Link>
	);
}

export default NavButton;