export type CreateEmployeeDTO = {
    // Employee Base Info
    employee_id : string,
    firstname: string,
    middlename: string,
    lastname: string,
    // Personal Info
    birthday: string,
    gender: string,
    phone: string,
    email: string
    addressLine: string
    postalCode: string,

    // Employment Info
    department_id: string,
    designation_id: string,
    employee_type: string,
    employee_status: string,

    // Salary Info
    payroll_frequency: string,
    base_salary: string,

    pagibig_id: string,
    sssid: string,
    philhealth_id: string,
    tin_id: string
}

export type GenericNameValueType = {
    name: string,
    value: string,
}

// Database types

export type Department = {
    department_id: number,
    name: string,
    status: string,
    create_at: Date,
    last_updated: Date
}
export type Designation = {
    designation_id:  number,
    department_id: number,
    title: string
    status: string
    create_at: Date,
    last_updated: Date
}
export type Employee = {
    employee_id?: number,
    uuid: string,
    firstname: string,
    middlename: string,
    lastname: string,
    status: string,
    create_at?: Date,
    last_updated?: Date
}
export type ActivityLogs = {
    activitylogs_id?: number
    employee_id: number,
    action: string,
    create_at?: Date,
    fullname?: string,
}
export type EmployeeIdentificationFinancialInformation = {
    identification_id?: number,
    employee_id: number,
    pag_ibig_id: string,
    sss_id: string,
    philhealth_id: string,
    tin: string,
    bank_account_number?: string,
    
    create_at?: Date,
    last_updated?: Date
}
export type EmployeeSalaryInformation = {
    salary_information_id?: number,
    employee_id: number,
    payroll_frequency: string,
    base_salary: number,

    created_at?: Date,
    last_updated?: Date,
}
export type EmployeePersonalInformation = {
    personal_information_id? : number,
    employee_id: number,
    birthday: string,
    gender: string,
    phone: string,
    email: string,
    address_line: string,
    postal_code: string,
    emergency_contact_name?: string,
    emergency_contact_phone?: string,
    emergency_contact_relationship?: string,
    created_at?: Date,
    last_updated?: Date
}
export type EmployeeEmploymentInformation = {
    employment_information_id?: number,
    employee_id: number,
    hireDate?: Date,
    department_id: number,
    designation_id: number,
    employee_type: string,
    employee_status: string,
    created_at?: string,
    last_updated?: string
}