import {Input} from '@/components/ui/input';
import {AddEmployee} from '../components/sections/add-employee';
import {ListEmployee} from '../components/sections/list-employee';


export default function EmployeePage() {
	return (
		<div className="flex flex-col text-white h-full">
			{/* Search Employee */}
			<div className='p-5 space-y-5'>
				<Input placeholder="Search Employee" className="text-sm" />
				
				<AddEmployee />
			</div>
			<div className='flex flex-col gap-2 h-full overflow-y-auto px-5'>
				<ListEmployee />
			</div>
		</div>
	);
}
