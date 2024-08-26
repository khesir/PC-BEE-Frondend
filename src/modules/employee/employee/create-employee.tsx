import { CreateEmployeeForm } from "../components/form/create-employee-form";

export function CreateEmployee() {
	return (
		<div className="h-full text-white min-h-0">
			<div className="h-full p-5 flex flex-col">
					
				<div className="flex-shrink-0">
					<h1 className="font-semibold text-lg">Create Employee</h1>
					<span className="text-sm text-slate-300">
						Provide all necessary information of the employee
					</span>
				</div>
				<div className="h-full overflow-y-auto">	
					<CreateEmployeeForm/>
				</div>
			</div>
		</div>
	);
}
