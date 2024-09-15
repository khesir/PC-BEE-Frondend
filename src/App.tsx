import {Routes as Router, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/dashboard/page';
import DashboardLayout from './pages/dashboard/layout';
import AuthenticationPage from './pages/authentication/page';
import NotFound from './pages/notFound/page';
import OverviewPage from './pages/employee/overview';
import SalesPage from './pages/sales/sales';
import EmployeePage from './pages/employee/employees';
import PayrollPage from './pages/employee/payroll';
import LeavePage from './pages/employee/leave';
import ServicePage from './pages/sales/service';
import InventoryPage from './pages/inventory/overview';
import ItemPage from './pages/inventory/items';
import OrderPage from './pages/inventory/orders';

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route index path="/" element={<AuthenticationPage />} />
				<Route element={<DashboardLayout />}>
					<Route path="dashboard" element={<Dashboard />} />

					<Route path="ems">
						<Route path="overview" element={<OverviewPage />} />
						<Route path="employees" element={<EmployeePage />} />
						<Route path="payroll" element={<PayrollPage />} />
						<Route path="leave" element={<LeavePage />} />
					</Route>

					<Route path="sales">
						<Route path="overview" element={<SalesPage />} />
						<Route path="services" element={<ServicePage />} />
					</Route>

					<Route path="inventory">
						<Route path="overview" element={<InventoryPage />} />
						<Route path="items" element={<ItemPage />} />
						<Route path="orders" element={<OrderPage />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Router>
		</BrowserRouter>
	);
}

export default App;
