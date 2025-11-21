import { Outlet } from 'react-router-dom';
import MainNav from './components/MainNav';

function RootLayout() {
	return (
		<div>
			<div style={{ display: "flex", minHeight: "100vh" }}>
				<MainNav />
				<div style={{ flex: 1, padding: "20px" }}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default RootLayout;