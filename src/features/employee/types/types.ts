

export type GenericNameValueType = {
    name: string,
    value: string,
}

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
    activitylogs_id: number
    employee_id: number,
    action: string,
    create_at: Date,
    fullname?: string,
}