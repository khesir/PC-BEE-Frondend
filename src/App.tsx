import {Routes as Router, Route, BrowserRouter} from 'react-router-dom';
import {Dashboard} from './pages/dashboard/page';
import DashboardLayout from './pages/dashboard/layout';
import AuthenticationPage from './pages/authentication/page';

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route index path="/" element={<AuthenticationPage />} />
				<Route element={<DashboardLayout />}>
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
			</Router>
		</BrowserRouter>
	);
}

export default App;
