import { CreateEmployeeForm } from "../components/form/create-employee-form";

export function CreateEmployee() {
	

	return (
		<div className="h-screen p-5 text-white overflow-y-auto min-h-0">
			
			<div className="flex-shrink-0">
				<h1 className="font-semibold text-lg">Create Employee</h1>
				<span className="text-sm text-slate-300">
					Provide all necessary information of the employee
				</span>
			</div>
			<CreateEmployeeForm/>
			
		</div>
	);
}
