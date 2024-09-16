import {ContentLayout} from '@/components/layout/content-layout';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import OverviewSection from './section/overview/overview-section';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';
import {mails} from './section/leave/data';
import {Mail} from './section/leave/mail';

export default function LeavePage() {
	const [defaultLayout, setDefaultLayout] = useState<any>();
	const [defaultCollapsed, setDefaultCollapsed] = useState<any>();

	useEffect(() => {
		const layout = Cookies.get('react-resizable-panels:layout:mail');
		const collapsed = Cookies.get('react-resizable-panels:collapsed');

		setDefaultLayout(layout ? JSON.parse(layout) : undefined);
		setDefaultCollapsed(collapsed ? JSON.parse(collapsed) : undefined);
	}, []);
	return (
		<ContentLayout title="Employee Management System">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to="/dashboard">Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to="/ems/overview">EMS</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to="/ems/overview">Overview</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Leave</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<Mail
				mails={mails}
				defaultLayout={defaultLayout}
				defaultCollapsed={defaultCollapsed}
				navCollapsedSize={4}
			/>{' '}
		</ContentLayout>
	);
}
