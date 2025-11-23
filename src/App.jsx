import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./RootLayout";

import HomePage from './pages/HomePage';
import BugsPage from './pages/BugsPage.jsx';
import EpicsPage from './pages/EpicsPage.jsx';

const router = createBrowserRouter([
	{ element: <RootLayout/>,
	children: [
		{ path: '/pega-main-nav', element: <HomePage/> },
		{ path: '/pega-main-nav/bugs', element: <BugsPage/> },
		{ path: '/pega-main-nav/epics', element: <EpicsPage/> },
	]}
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
