import NavButton from "./NavButton.jsx";

import { IoAdd } from "react-icons/io5";
import { FaBell, FaHistory } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import {useState} from "react";

function MainNav() {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = () => setExpanded(!expanded);

	return (
		<div className="main-nav">
			<img src='/pega-logo.png' alt='logo' width='50px' />

			<NavButton icon={IoAdd} label="Create" onClick={() => toggleExpanded()} />
			{expanded && (
				<>
					<NavButton label="Backlog" onClick={() => console.log("Clicked")} />
					<NavButton label="Bug" onClick={() => console.log("Clicked")} />
					<NavButton label="Epic" onClick={() => console.log("Clicked")} />
					<NavButton label="Feedback" onClick={() => console.log("Clicked")} />
					<NavButton label="Goal" onClick={() => console.log("Clicked")} />
					<NavButton label="Issue" onClick={() => console.log("Clicked")} />
					<NavButton label="Product" onClick={() => console.log("Clicked")} />
					<NavButton label="Release" onClick={() => console.log("Clicked")} />
					<NavButton label="Root Cause" onClick={() => console.log("Clicked")} />
				</>
			)}


			<NavButton icon={FaBell} label="Notifications" onClick={() => console.log("Clicked")} />
			<NavButton icon={FaHistory} label="Recents" onClick={() => console.log("Clicked")} />
			<NavButton icon={TbGridDots} label="My Applications" onClick={() => console.log("Clicked")} />
		</div>
	);
}

export default MainNav;