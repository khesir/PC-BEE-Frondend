import {Outlet} from 'react-router-dom';
import {Sidebar} from '../components/admin-panel/sidebar';
import {LucideIcon} from 'lucide-react';
import {Navbar} from '../components/admin-panel/navbar';
import {QuickAccessIcons} from '../components/admin-panel/quick-access-icons';
import { Toaster } from '@/components/ui/sonner';

export type SidebarItem = {
	title: string;
	href: string;
	label?: string;
	icon: LucideIcon;
	variant?: string;
};

export type SidebarItems = {
	layout: SidebarItem[];
};

export function ProjectLayout({layout}: SidebarItems) {
	return (
		<div className="w-full h-full flex min-h-0 bg-slate-600 overflow-hidden">
			{/* Side bar */}
			<Sidebar layout={layout} />
			{/* Menu bar */}
			<div className="flex flex-col h-full w-full overflow-hidden">
				<header className="flex justify-between flex-shrink-0 sticky items-center bg-slate-700 h-[5vh] px-4 text-white border-b border-black shadow-sm">
					{/* Navbar */}
					<Navbar />
					<div className="flex gap-5">
						<QuickAccessIcons />
					</div>
				</header>
				{/* Main Conrtent */}
				<div className=" h-full">
					<Outlet />
				</div>
				<Toaster />
			</div>
		</div>
	);
}
