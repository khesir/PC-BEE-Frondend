import {Routes as Router, Route, BrowserRouter} from 'react-router-dom';

import LoginPage from './modules/auth/login';
import ForgotPasswordPage from './modules/auth/forgot-password';
import EmployeePage from './modules/employee/employee/employee-page';
import NoPage from './modules/auth/nopage';
import WelcomePage from './modules/components/welcome';
import {ProjectLayout} from './modules/components/project-layout';

import {
	employeeSidebar,
	InventorySidebar,
	SalesSidebar,
} from './constant/constant';

import InventoryPage from './modules/inventory/inventory-page';
import SalesPage from './modules/sales/sales-page';
import {EmployeeListLayout} from './modules/employee/components/employee-layout';
import {CreateEmployee} from './modules/employee/employee/create-employee';

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route index path="/" element={<WelcomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />

				<Route
					path="employee"
					element={<ProjectLayout layout={employeeSidebar} />}
				>
					<Route element={<EmployeeListLayout />}>
						<Route path="users" element={<EmployeePage />} />
						<Route path="create" element={<CreateEmployee />} />
					</Route>
				</Route>

				<Route path="sales" element={<ProjectLayout layout={SalesSidebar} />}>
					<Route path="shop" element={<SalesPage />} />
				</Route>

				{/* /inventory */}

				<Route
					path="inventory"
					element={<ProjectLayout layout={InventorySidebar} />}
				>
					{/* /inventory/items */}
					<Route path="items/:id" element={<InventoryPage />} />
					{/* /inventory/partorder/:id */}
				</Route>

				<Route path="*" element={<NoPage />} />
			</Router>
		</BrowserRouter>
	);
}

export default App;
