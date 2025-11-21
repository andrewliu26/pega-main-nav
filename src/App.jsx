import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./RootLayout";

import HomePage from './pages/HomePage';
import BugPage from './pages/BugPage.jsx';
import EpicPage from './pages/EpicPage.jsx';

const router = createBrowserRouter([
	{ element: <RootLayout/>,
	children: [
		{ path: '/', element: <HomePage/> },
		{ path: '/bug', element: <BugPage/> },
		{ path: '/epic', element: <EpicPage/> },
	]}
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
