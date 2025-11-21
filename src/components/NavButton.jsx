function NavButton({ icon: Icon = null, label, showLabel }) {
	return (
		<div className="nav-button">
			{Icon && <Icon className="icon" />}
			<div
				style={{
					width: showLabel ? "200px" : "0px",
					transition: "width 0.2s ease-in-out",
					overflow: "hidden",
				}}
			>
				<p className="button-text">{label}</p>
			</div>
		</div>
	);
}

export default NavButton;