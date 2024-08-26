import {Routes as Router, Route, BrowserRouter} from 'react-router-dom';

// Setup 
import WelcomePage from './modules/auth/welcome';

// Project layout
import {
	employeeSidebar,
	InventorySidebar,
	SalesSidebar,
} from './constant/constant';
import {ProjectLayout} from './layout/project-layout';

// Authentication
import LoginPage from './modules/auth/login';
import ForgotPasswordPage from './modules/auth/forgot-password';
import NoPage from './modules/auth/nopage';

// Inventory Components
import InventoryPage from './modules/inventory/inventory-page';

// Sales Components
import SalesPage from './modules/sales/sales-page';

// Employeee Components
import EmployeePage from './modules/employee/employee/employee-page';
import {EmployeeListLayout} from './modules/employee/layout/employee-layout';
import {CreateEmployee} from './modules/employee/employee/create-employee';
import EmployeePayrollPage from './modules/employee/employee/employee-payroll-page';

import Payroll from './modules/employee/employee/payroll';


import Chat from './modules/chat/chat';
import LeaveRequest from './modules/employee/employee/leave-request';
import EmployeeLeaveRequest from './modules/employee/employee/employee-leave-request';

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
