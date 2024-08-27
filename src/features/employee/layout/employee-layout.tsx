import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import { ActivityLogsPage } from '../components/sections/activity-logs';

type CurrentPage = {
	page: string;
	title: string;
	sidebar: boolean;
	titlebar: boolean;
};

export function EmployeeListLayout() {
	const [currentPage, setCurrentPage] = useState<CurrentPage>({
		page: '',
		title: '',
		sidebar: false,
		titlebar: false,
	});

	const location = useLocation();
	const currentPath = location.pathname.split('/')[2];
	const pathName = '/' + currentPath;

	useEffect(() => {
		let pageDetails: CurrentPage = {
			page: pathName,
			title: '',
			sidebar: false,
			titlebar: false,
		};

		switch (pathName) {
			case '/create':
				pageDetails = {
					page: pathName,
					title: 'Add Employee',
					sidebar: false,
					titlebar: true,
				};
				break;
			case '/users':
				pageDetails = {
					page: pathName,
					title: '',
					sidebar: true,
					titlebar: false,
				};
				break;
			default:
				pageDetails = {
					page: '',
					title: '',
					sidebar: false,
					titlebar: false,
				};
				break;
		}

		setCurrentPage(pageDetails);
	}, [pathName]); // Only run when `pathName` changes

	return (
		<div className="flex flex-row w-full h-[95vh]">
			<div className="flex flex-col flex-[3] h-full">
				{currentPage?.titlebar && (
					<div className=" text-white flex-shrink-0 bg-slate-700 p-3 border-b border-black font-semibold">
						{currentPage?.title}
					</div>
				)}
				
				<Outlet />

			</div>
			{currentPage?.sidebar && (
				<div className="hidden h-full lg:block bg-slate-700 flex-[1] border-l border-black text-white ">
					<div className="h-full w-full p-5 overflow-y-auto overflow-x-hidden">
						<span className="text-xl font-bold">Activity Logs</span>
						<ActivityLogsPage />
					</div>
				</div>
			)}
		</div>
	);
}
