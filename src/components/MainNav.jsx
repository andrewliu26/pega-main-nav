import { useState } from "react";

import NavButton from "./NavButton.jsx";
import SearchBar from "./SearchBar.jsx";

import { IoHome, IoGrid, IoBug, IoDocument } from "react-icons/io5";
import { FaBell, FaHistory, FaFlag, FaListUl } from "react-icons/fa";
import { PiStarFourFill} from "react-icons/pi";
import { TbPlus, TbGridDots } from "react-icons/tb";

function MainNav() {
	const [expanded, setExpanded] = useState(false);
	const [groupOpen, setGroupOpen] = useState(false);

	return (
		<div
			className="main-nav"
			onMouseEnter={() => setExpanded(true)}
			onMouseLeave={() => setExpanded(false)}
			style={{ width: expanded ? "300px" : "70px" }}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "100%",
				}}
			>
				<div>
					<div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<img
								src="/pega-logo.png"
								alt="logo"
								width="40px"
								style={{ margin: "16px" }}
							/>
							{expanded && <p style={{ fontSize: '14px' }}>Demo</p>}
						</div>

						<SearchBar showLabel={expanded}/>
					</div>

					<NavButton
						icon={TbPlus}
						label="Create"
						showLabel={expanded}
						onClick={() => setGroupOpen(!groupOpen)}
					/>

					{groupOpen && (
						<div>
							<NavButton icon={null} label="Bug" />
							<NavButton icon={null} label="Epic" />
							<NavButton icon={null} label="Goal" />
						</div>
					)}

					<NavButton icon={IoHome} label="Home" showLabel={expanded}/>
					<NavButton icon={PiStarFourFill} label="Dashboard" showLabel={expanded}/>
					<NavButton icon={IoGrid} label="Spaces" showLabel={expanded}/>
					<NavButton icon={IoDocument} label="Documents" showLabel={expanded}/>
					<NavButton icon={IoBug} label="Bugs" showLabel={expanded}/>
					<NavButton icon={FaListUl} label="Epics" showLabel={expanded}/>
					<NavButton icon={FaFlag} label="Goals" showLabel={expanded}/>
				</div>

				<div>
					<NavButton icon={FaBell} label="Notifications" showLabel={expanded}/>
					<NavButton icon={FaHistory} label="Recents" showLabel={expanded}/>
					<NavButton icon={TbGridDots} label="My Applications" showLabel={expanded}/>
				</div>
			</div>

		</div>
	);
}

export default MainNav;