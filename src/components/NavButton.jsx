function NavButton({ icon: Icon = null, label, onClick }) {
	return (
		<div className="nav-button" onClick={onClick}>
			{ Icon && <Icon className="icon" />}
			<p className="button-text">{label}</p>
		</div>
	);
}

export default NavButton;