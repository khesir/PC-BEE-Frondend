import { Department, Designation, GenericNameValueType } from "../types/types"


export const DepartmentData: Department[] = [
    {
        department_id: 1,
        name: 'Technical',
        status: 'active',
        create_at: new Date('2020-21-2'),
        last_updated: new Date('2020-21-2')
    },
    {
        department_id: 2,
        name: 'Sales',
        status: 'active',
        create_at: new Date('2020-21-2'),
        last_updated: new Date('2020-21-2')
    },
]

export const DesignationData : Designation[] =[
    {
        designation_id: 1,
        department_id: 1,
        title: 'Technician Head',
        status: 'active',
        create_at: new Date('2020-21-2'),
        last_updated: new Date('2020-21-2')
    },
    {
        designation_id: 2,
        department_id: 1,
        title: 'Technician',
        status: 'active',
        create_at: new Date('2020-21-2'),
        last_updated: new Date('2020-21-2')
    },
    {
        designation_id: 3,
        department_id: 2,
        title: 'Sales Head',
        status: 'active',
        create_at: new Date('2020-21-2'),
        last_updated: new Date('2020-21-2')
    },
    {
        designation_id: 4,
        department_id: 2,
        title: 'Sales',
        status: 'active',
        create_at: new Date('2020-21-2'),
        last_updated: new Date('2020-21-2')
    }
] 
export const Gender: GenericNameValueType[] = [
    {
        name: 'Male',
        value: 'male',
    },
    {
        name: 'Female',
        value: 'female',
    },
    {
        name: 'Others',
        value: 'others',
    }
]

export const EmployeeStatus: GenericNameValueType[] = [
    {
        name: 'Active',
        value: 'active'
    },
    {
        name: 'On Leave',
        value: 'onLeave'
    },
    {
        name: 'Terminated',
        value: 'terminated'
    },
    {
        name: 'Resigned',
        value: 'resigned'
    },
    {
        name: 'Suspended',
        value: 'suspended'
    },
    {
        name: 'Retired',
        value: 'retired'
    },
    {
        name: 'Inactive',
        value: 'inactive'
    }
];

export const EmployeeType: GenericNameValueType[] = [
    {
        name: 'Regular',
        value: 'regular'
    },
    {
        name: 'Probationary',
        value: 'probationary'
    },
    {
        name: 'Contractual',
        value: 'contractual'
    },
    {
        name: 'Seasonal',
        value: 'seasonal'
    },
    {
        name: 'Temporary',
        value: 'temporary'
    }
];

export const PayrollFrequency: GenericNameValueType[] = [
    {
        name: 'Daily',
        value: 'daily'
    },
    {
        name: 'Weekly',
        value: 'weekly'
    },
    {
        name: 'Bi-Weekly',
        value: 'biWeekly'
    },
    {
        name: 'Semi-Monthly',
        value: 'semiMonthly'
    },
    {
        name: 'Monthly',
        value: 'monthly'
    }
];
