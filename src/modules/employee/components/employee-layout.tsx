import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';

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
					sidebar: true,
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
		<div className="w-full h-full flex justify-between">
			<div className="w-full h-full">
				{currentPage?.titlebar && (
					<div className=" text-white bg-slate-700 p-3 border-b border-black font-semibold">
						{currentPage?.title}
					</div>
				)}
				<div className="overflow-y-auto overflow-x-hidden">
					<Outlet />
				</div>
			</div>
			{currentPage?.sidebar && (
				<div className="hidden lg:block bg-slate-700 w-1/3 border-l border-black text-white">
					<div className="w-full p-5">
						<span className="text-xl font-bold">Activity Logs</span>
						<div className="w-full flex flex-col mt-5 ml-2">items</div>
					</div>
				</div>
			)}
		</div>
	);
}
