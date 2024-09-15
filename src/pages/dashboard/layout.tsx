import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout';
import {Outlet} from 'react-router-dom';

export default function DashboardLayout() {
	return (
		<AdminPanelLayout>
			<Outlet />
		</AdminPanelLayout>
	);
}
