export type Employee = {
	employee_id: number;
	firstname: string;
	middlename: string;
	lastname: string;
	status: string;
	uuid: string;
	created_at: string;
	last_updated: string;
	deleted_at: string;
};

export type PersonalInformation = {
	personal_information_id: number;
	employee_id: number;
	birthday: string;
	gender: string;
	phone: string;
	email: string;
	address_line: string;
	postal_code: string;
	emergency_contact_name: string;
	emergency_contact_phone: string;
	emergency_contact_relationship: string;
	created_at: string;
	last_updated: string;
	deleted_at?: string;
};

export type FinancialInformation = {
	financial_id: number;
	employee_id: number;
	pag_ibig_id: string;
	sss_id: string;
	philhealth_id: string;
	tin: string;
	bank_account_number: string;
	created_at: string;
	last_updated: string;
	deleted_at?: string;
};

export type SalaryInformation = {
	salary_information_id: number;
	employee_id: number;
	payroll_frequency: string;
	base_salary: number;
	created_at: string;
	last_updated: string;
	deleted_at?: string;
};
export type EmployementLeftJoin = {
	employment_info: EmploymentInformation;
	department: Department;
	designation: Designation;
};

export type EmploymentInformation = {
	employment_information_id: number;
	employee_id: number;
	hireDate: string;
	department_id: number;
	designation_id: number;
	employee_type: string;
	employee_status: string;
	created_at: string;
	last_updated: string;
	deleted_at?: string;
};

export type Department = {
	department_id: number;
	name: string;
	status: string;
	created_at: string;
	last_updated: string;
	deleted_at?: string;
};

export type Designation = {
	designation_id: number;
	title: string;
	status: string;
	created_at: string;
	last_updated: string;
	deleted_at?: string;
};

export type Payroll = {
	payroll_id?: number;
	start: string;
	end: string;
	pay_date: string;
	payroll_finished?: string;
	status: string;
	created_at?: string;
	last_updated?: string;
	deleted_at?: string;
};

export type OnPayrollJoin = {
	on_payroll: OnPayroll;
	employee: Employee;
	payroll_approval: PayrollApproval;
};

export type OnPayroll = {
	on_payroll_id?: number;
	payroll_id: number;
	employee_id: number;
	created_at?: string;
	last_updated?: string;
	deleted_at?: string;
};

export type PayrollApproval = {
	payroll_approval_id?: number;
	on_payroll_id: number;
	signatory_id: number;
	approval_status: string;
	created_at?: string;
	last_updated?: string;
	deleted_at?: string;
};
