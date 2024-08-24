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
		<div className="w-full h-screen bg-slate-600">
			<div className='flex h-full'>
				{/* Side bar */}
				<Sidebar layout={layout} />
				{/* Menu bar */}
				<div className="flex flex-col w-full h-full">
					<header className="flex justify-between items-center bg-slate-700 h-[49px] px-3 text-white border-b border-black shadow-sm">
						{/* Navbar */}
						<Navbar />
						<div className="flex gap-5">
							<QuickAccessIcons />
						</div>
					</header>
					{/* Main Conrtent */}
					<div className="overflow-y-auto h-full">
						<Outlet />
					</div>
					<Toaster />
				</div>
			</div>
		</div>
	);
}
