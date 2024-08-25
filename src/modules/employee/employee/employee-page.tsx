import {Input} from '@/components/ui/input';
import {AddEmployee} from '../components/sections/add-employee';
import {ListEmployee} from '../components/sections/list-employee';

export default function EmployeePage() {
	return (
		<div className="flex flex-col m-5 px-5 gap-7 text-white h-screen">
			{/* Search Employee */}
			<div className='w-full h-full overflow-y-auto'>
				<Input placeholder="Search Employee" className="h-[35px] text-sm" />
				<div className='space-y-3'>
					<AddEmployee />
					<ListEmployee />
				</div>
			</div>
		</div>
	);
}
