import {Input} from '@/components/ui/input';
import {AddEmployee} from '../components/list-employee/add-employee';
import {ListEmployee} from '../components/list-employee/list-employee';

export default function EmployeePage() {
	return (
		<div className="flex flex-col m-5 px-5 gap-7 text-white">
			{/* Search Employee */}
			<Input placeholder="Search Employee" className="h-[35px] text-sm" />
			<div className=" space-y-2">
				<AddEmployee />
				<ListEmployee />
			</div>
		</div>
	);
}
