import {Progress} from '@/components/ui/progress';
import {useState} from 'react';

export function CreateEmployee() {
	const [progress, setProgress] = useState(33);

	return (
		<div className="w-full h-full p-5">
			<div className="text-white space-y-5">
				<Progress value={progress} className="w-[400px]" />
				<div>
					<h1 className="font-semibold text-lg">Create Employee</h1>
					<span className="text-sm text-slate-300">
						Provide all necessary information of the employee
					</span>
				</div>
				<div className="space-y-10 p-5">
					<div className="border-b border-white">
						<h1 className="font-semibold text-md">Company Profile</h1>
						<span className="text-sm text-slate-300">
							This is where company necessary information
						</span>
					</div>
					<div className="border-b border-white">
						<h1 className="font-semibold text-md">Employee Details</h1>
						<span className="text-sm text-slate-300">
							Provide all basics user informations
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
