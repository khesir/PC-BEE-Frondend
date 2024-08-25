import {Outlet} from 'react-router-dom';
import {Sidebar} from '../components/navbar/sidebar';
import {LucideIcon} from 'lucide-react';
import {Navbar} from '../components/navbar/navbar';
import {QuickAccessIcons} from '../components/navbar/quick-access-icons';
import { Toaster } from '@/components/ui/toaster';

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
		<div className="w-full h-full min-h-0 bg-slate-600 overflow-hidden">
			<div className='flex h-screen'>
				{/* Side bar */}
				<Sidebar layout={layout} />
				{/* Menu bar */}
				<div className="flex flex-col w-full">
					<header className="flex justify-between flex-shrink-0 items-center bg-slate-700 h-[48px] px-3 text-white border-b border-black shadow-sm">
						{/* Navbar */}
						<Navbar />
						<div className="flex gap-5">
							<QuickAccessIcons />
						</div>
					</header>
					{/* Main Conrtent */}
					<div className="flex-1">
						<Outlet />
					</div>
					<Toaster />
				</div>
			</div>
		</div>
	);
}
