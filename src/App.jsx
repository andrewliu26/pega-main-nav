import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./RootLayout";

import HomePage from './pages/HomePage';
import BugsPage from './pages/BugsPage.jsx';
import EpicsPage from './pages/EpicsPage.jsx';

const router = createBrowserRouter([
	{ element: <RootLayout/>,
	children: [
		{ path: '/', element: <HomePage/> },
		{ path: '/bugs', element: <BugsPage/> },
		{ path: '/epics', element: <EpicsPage/> },
	]}
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
