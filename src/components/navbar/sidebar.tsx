import {SidebarItems} from '../../layout/project-layout';
import {JobOrderListing} from '../../modules/joborders/job-order-listing';
import {UserProfile} from '../user/user-bottom-bar';
import {NavSelector} from './nav-selector';
import {HotSearch} from './hot-search';

export function Sidebar(items: SidebarItems) {
	return (
		<div className="h-screen flex flex-col flex-shrink-0 gap-5 text-white w-[250px] bg-slate-700 ">
			<div className="flex justify-center items-center h-[50px] w-full border-b border-black shadow-sm">
				<HotSearch />
			</div>
			<div className="h-full flex flex-col justify-between">
				<div className="space-y-5 pl-3">
					<div className="flex flex-col">
						<NavSelector {...items} />
					</div>

					<JobOrderListing />
				</div>

				<UserProfile />
			</div>
		</div>
	);
}
