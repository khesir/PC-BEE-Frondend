import {
	Tag,
	Users,
	Settings,
	LayoutGrid,
	LucideIcon,
	PackageOpenIcon,
	Terminal,
	Network,
	BookCopy,
} from 'lucide-react';

type Submenu = {
	href: string;
	label: string;
	active: boolean;
};

type Menu = {
	href: string;
	label: string;
	active: boolean;
	icon: LucideIcon;
	submenus: Submenu[];
};

type Group = {
	groupLabel: string;
	menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
	return [
		{
			groupLabel: '',
			menus: [
				{
					href: '/dashboard',
					label: 'Dashboard',
					active: pathname.includes('/dashboard'),
					icon: LayoutGrid,
					submenus: [],
				},
				{
					href: '/activity',
					label: 'Activity',
					active: pathname.includes('/activity'),
					icon: Network,
					submenus: [
						{
							href: '/activity/overview',
							label: 'Overview',
							active: pathname === '/activity/overview',
						},
						{
							href: '/activity/attendance',
							label: 'Attendance',
							active: pathname === '/activity/attendance',
						},
						{
							href: '/activity/interchat',
							label: 'Chat',
							active: pathname === '/activity/chat',
						},
					],
				},
			],
		},
		{
			groupLabel: 'Systems',
			menus: [
				{
					href: '/ems',
					label: 'EMS',
					active: pathname.includes('/ems'),
					icon: Users,
					submenus: [
						{
							href: '/ems/overview',
							label: 'Overview',
							active: pathname === '/ems/overview',
						},
						{
							href: '/ems/employees',
							label: 'Employees',
							active: pathname === '/ems/employees',
						},
						{
							href: '/ems/payroll',
							label: 'Payroll',
							active: pathname === '/ems/payroll',
						},
						{
							href: '/ems/leave',
							label: 'Leave Requests',
							active: pathname === '/leave',
						},
					],
				},
				{
					href: '/sales',
					label: 'Sales',
					active: pathname.includes('/sales'),
					icon: Tag,
					submenus: [
						{
							href: '/sales/overview',
							label: 'Overview',
							active: pathname === '/sales/overview',
						},
						{
							href: '/sales/services',
							label: 'Services',
							active: pathname === '/sales/services',
						},
					],
				},
				{
					href: '/inventory',
					label: 'Inventory',
					active: pathname.includes('/inventory'),
					icon: PackageOpenIcon,
					submenus: [
						{
							href: '/inventory/overview',
							label: 'Overview',
							active: pathname === '/inventory/overview',
						},
						{
							href: '/inventory/items',
							label: 'Items',
							active: pathname === '/inventory/items',
						},
						{
							href: '/inventory/orders',
							label: 'Orders',
							active: pathname === '/inventory/orders',
						},
					],
				},
			],
		},
		{
			groupLabel: 'Settings',
			menus: [
				{
					href: '/terminal',
					label: 'Terminal',
					active: pathname.includes('/terminal'),
					icon: Terminal,
					submenus: [],
				},
				{
					href: '/setting',
					label: 'Settings',
					active: pathname.includes('/settings'),
					icon: Settings,
					submenus: [],
				},
			],
		},
	];
}
