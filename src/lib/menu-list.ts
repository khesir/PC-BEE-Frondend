import {
	Tag,
	Users,
	Settings,
	LayoutGrid,
	LucideIcon,
	PackageOpenIcon,
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
			],
		},
		{
			groupLabel: 'Systems',
			menus: [
				{
					href: '',
					label: 'EMS Overview',
					active: pathname.includes('/ems'),
					icon: Users,
					submenus: [
						{
							href: '/employee',
							label: 'Employees',
							active: pathname === '/employee',
						},
						{
							href: '/payroll',
							label: 'Payroll',
							active: pathname === '/payroll',
						},
						{
							href: '/leaveRequest',
							label: 'Leave Requests',
							active: pathname === '/leaveRequest',
						},
					],
				},
				{
					href: '/sales',
					label: 'Sales',
					active: pathname.includes('/sales'),
					icon: Tag,
					submenus: [],
				},
				{
					href: '/inventory',
					label: 'Inventory',
					active: pathname.includes('/inventory'),
					icon: PackageOpenIcon,
					submenus: [],
				},
			],
		},
		{
			groupLabel: 'Settings',
			menus: [
				{
					href: '/account',
					label: 'Account',
					active: pathname.includes('/account'),
					icon: Settings,
					submenus: [],
				},
			],
		},
	];
}
