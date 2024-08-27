import {Routes as Router, Route, BrowserRouter} from 'react-router-dom';

// Setup 
import WelcomePage from './features/auth/welcome';

// Project layout
import {
	employeeSidebar,
	InventorySidebar,
	SalesSidebar,
} from './constant/constant';
import {ProjectLayout} from './layout/project-layout';

// Authentication
import LoginPage from './features/auth/login';
import ForgotPasswordPage from './features/auth/forgot-password';
import NoPage from './features/auth/nopage';

// Inventory Components
import InventoryPage from './features/inventory/inventory-page';

// Sales Components
import SalesPage from './features/sales/sales-page';

// Employeee Components
import EmployeePage from './features/employee/pages/employee-page';
import {EmployeeListLayout} from './features/employee/layout/employee-layout';
import {CreateEmployee} from './features/employee/pages/create-employee-page';
import EmployeePayrollPage from './features/employee/pages/employee-payroll-page';

import Payroll from './features/employee/pages/payroll';


import Chat from './features/chat/chat';
import LeaveRequest from './features/employee/pages/leave-request';
import EmployeeLeaveRequest from './features/employee/pages/employee-leave-request';

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route index path="/" element={<WelcomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />

				{/* Universal Routes */}
				<Route path="notification"/>
				<Route path="calendar"/>
				<Route path="inbox"/>
				<Route path="guide"/>

				<Route
					path="chat"
					element={<ProjectLayout layout={employeeSidebar} />}
				>
					<Route path="channel/:id" element={<Chat/>}/>
				</Route>

				<Route
					path="employee"
					element={<ProjectLayout layout={employeeSidebar} />}
				>
					<Route element={<EmployeeListLayout />}>
						<Route path="users" element={<EmployeePage />} />
						<Route path="create" element={<CreateEmployee />} />
						<Route path="edit/:id"  />
						{/* Payroll */}
						<Route path="payroll" element={<Payroll/>}/>
						<Route path="payroll/:id" element={<EmployeePayrollPage/>}/>
						
						{/* */}
						<Route path="leave-req" element={<LeaveRequest/>}/>
						<Route path="leave-req/:id" element={<EmployeeLeaveRequest/>}/>
					</Route>
				</Route>

				<Route path="sales" element={<ProjectLayout layout={SalesSidebar} />}>
					<Route path="dashboard" />
					<Route path="shop" element={<SalesPage />} />
					<Route path="service"/>
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
