
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

export type GenericNameValueType = {
    name: string,
    value: string,
}