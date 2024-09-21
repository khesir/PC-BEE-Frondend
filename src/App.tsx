import {Routes as Router, Route, BrowserRouter} from 'react-router-dom';
import AdminPanelLayout from './app/_components/layout/admin/admin-panel-layout';
import AuthenticationPage from './app/authentication/page';
import CreateEmployeePage from './app/ems/employee/create/create-employee';
import EmployeePage from './app/ems/employee/main/employees-page';
import LeavePage from './app/ems/leave/leave';
import EMSPage from './app/ems/page';
import PayrollCreatePage from './app/ems/payroll/create/payroll-create';
import PayrollOverview from './app/ems/payroll/details/onpayroll-details-page';
import PayrollPage from './app/ems/payroll/payroll-page';
import ItemPage from './app/inventory/items';
import OrderPage from './app/inventory/orders';
import InventoryPage from './app/inventory/overview';
import NotFound from './app/_not-found';
import DashboardPage from './app/page';
import ServicePage from './app/sales/service/service';
import SalesPage from './app/sales/sales';

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route index path="/" element={<AuthenticationPage />} />

				{/* Admin Dashboard */}
				<Route element={<AdminPanelLayout />}>
					<Route path="dashboard" element={<DashboardPage />} />

					<Route path="ems">
						<Route path="overview" element={<EMSPage />} />

						<Route path="employees" element={<EmployeePage />} />
						<Route path="employees/create" element={<CreateEmployeePage />} />

						<Route path="payroll" element={<PayrollPage />} />
						<Route path="payroll/:id/details" element={<PayrollOverview />} />
						<Route path="payroll/:id/create/" element={<PayrollCreatePage />} />

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

				{/* TODO: Technical Layout */}
				{/* TODO: Sales Layout */}
				<Route path="*" element={<NotFound />} />
			</Router>
		</BrowserRouter>
	);
}

export default App;
