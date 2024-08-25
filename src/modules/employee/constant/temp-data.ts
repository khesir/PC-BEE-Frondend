import { Department, Designation, Employee, GenericNameValueType, ActivityLogs } from "../types/types"


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

export const ActiveUsers: Employee[]  = [
	{
        employee_id: 1,
        firstname: 'Claire',
        middlename: 'Mid',
        lastname: 'Dia',
        status: 'Working on JO-2222-3-2321',
        create_at: new Date('2020-02-21'),
        last_updated: new Date('2020-02-21')
	},
    {
        employee_id: 2,
        firstname: 'John',
        middlename: 'Patrick',
        lastname: 'Smith',
        status: 'Working on JO-2222-4-2322',
        create_at: new Date('2021-03-15'),
        last_updated: new Date('2021-03-15')
    },
    {
        employee_id: 3,
        firstname: 'Alice',
        middlename: 'Marie',
        lastname: 'Johnson',
        status: 'Working on JO-2222-5-2323',
        create_at: new Date('2021-06-01'),
        last_updated: new Date('2021-06-01')
    },
    {
        employee_id: 4,
        firstname: 'Michael',
        middlename: 'James',
        lastname: 'Brown',
        status: 'Working on JO-2222-6-2324',
        create_at: new Date('2020-11-10'),
        last_updated: new Date('2020-11-10')
    },
    {
        employee_id: 5,
        firstname: 'Sarah',
        middlename: 'Louise',
        lastname: 'Davis',
        status: 'Working on JO-2222-7-2325',
        create_at: new Date('2021-09-12'),
        last_updated: new Date('2021-09-12')
    },
    {
        employee_id: 6,
        firstname: 'David',
        middlename: 'Edward',
        lastname: 'Miller',
        status: 'Working on JO-2222-8-2326',
        create_at: new Date('2020-05-18'),
        last_updated: new Date('2020-05-18')
    },
    {
        employee_id: 7,
        firstname: 'Jessica',
        middlename: 'Ann',
        lastname: 'Wilson',
        status: 'Working on JO-2222-9-2327',
        create_at: new Date('2022-04-22'),
        last_updated: new Date('2022-04-22')
    },
    {
        employee_id: 8,
        firstname: 'Robert',
        middlename: 'Lee',
        lastname: 'Moore',
        status: 'Working on JO-2222-10-2328',
        create_at: new Date('2021-01-07'),
        last_updated: new Date('2021-01-07')
    },
    {
        employee_id: 9,
        firstname: 'Emily',
        middlename: 'Grace',
        lastname: 'Taylor',
        status: 'Working on JO-2222-11-2329',
        create_at: new Date('2020-08-19'),
        last_updated: new Date('2020-08-19')
    },
    {
        employee_id: 10,
        firstname: 'Daniel',
        middlename: 'Christopher',
        lastname: 'Anderson',
        status: 'Working on JO-2222-12-2330',
        create_at: new Date('2022-07-30'),
        last_updated: new Date('2022-07-30')
    },
    {
        employee_id: 1,
        firstname: 'Claire',
        middlename: 'Mid',
        lastname: 'Dia',
        status: 'Working on JO-2222-3-2321',
        create_at: new Date('2020-02-21'),
        last_updated: new Date('2020-02-21')
	},
    {
        employee_id: 2,
        firstname: 'John',
        middlename: 'Patrick',
        lastname: 'Smith',
        status: 'Working on JO-2222-4-2322',
        create_at: new Date('2021-03-15'),
        last_updated: new Date('2021-03-15')
    },
    {
        employee_id: 3,
        firstname: 'Alice',
        middlename: 'Marie',
        lastname: 'Johnson',
        status: 'Working on JO-2222-5-2323',
        create_at: new Date('2021-06-01'),
        last_updated: new Date('2021-06-01')
    },
    {
        employee_id: 4,
        firstname: 'Michael',
        middlename: 'James',
        lastname: 'Brown',
        status: 'Working on JO-2222-6-2324',
        create_at: new Date('2020-11-10'),
        last_updated: new Date('2020-11-10')
    },
    {
        employee_id: 5,
        firstname: 'Sarah',
        middlename: 'Louise',
        lastname: 'Davis',
        status: 'Working on JO-2222-7-2325',
        create_at: new Date('2021-09-12'),
        last_updated: new Date('2021-09-12')
    },
    {
        employee_id: 6,
        firstname: 'David',
        middlename: 'Edward',
        lastname: 'Miller',
        status: 'Working on JO-2222-8-2326',
        create_at: new Date('2020-05-18'),
        last_updated: new Date('2020-05-18')
    },
    {
        employee_id: 7,
        firstname: 'Jessica',
        middlename: 'Ann',
        lastname: 'Wilson',
        status: 'Working on JO-2222-9-2327',
        create_at: new Date('2022-04-22'),
        last_updated: new Date('2022-04-22')
    },
    {
        employee_id: 8,
        firstname: 'Robert',
        middlename: 'Lee',
        lastname: 'Moore',
        status: 'Working on JO-2222-10-2328',
        create_at: new Date('2021-01-07'),
        last_updated: new Date('2021-01-07')
    },
    {
        employee_id: 9,
        firstname: 'Emily',
        middlename: 'Grace',
        lastname: 'Taylor',
        status: 'Working on JO-2222-11-2329',
        create_at: new Date('2020-08-19'),
        last_updated: new Date('2020-08-19')
    },
    {
        employee_id: 10,
        firstname: 'Daniel',
        middlename: 'Christopher',
        lastname: 'Anderson',
        status: 'Working on JO-2222-12-2330',
        create_at: new Date('2022-07-30'),
        last_updated: new Date('2022-07-30')
    },
    {
        employee_id: 1,
        firstname: 'Claire',
        middlename: 'Mid',
        lastname: 'Dia',
        status: 'Working on JO-2222-3-2321',
        create_at: new Date('2020-02-21'),
        last_updated: new Date('2020-02-21')
	},
    {
        employee_id: 2,
        firstname: 'John',
        middlename: 'Patrick',
        lastname: 'Smith',
        status: 'Working on JO-2222-4-2322',
        create_at: new Date('2021-03-15'),
        last_updated: new Date('2021-03-15')
    },
    {
        employee_id: 3,
        firstname: 'Alice',
        middlename: 'Marie',
        lastname: 'Johnson',
        status: 'Working on JO-2222-5-2323',
        create_at: new Date('2021-06-01'),
        last_updated: new Date('2021-06-01')
    },
    {
        employee_id: 4,
        firstname: 'Michael',
        middlename: 'James',
        lastname: 'Brown',
        status: 'Working on JO-2222-6-2324',
        create_at: new Date('2020-11-10'),
        last_updated: new Date('2020-11-10')
    },
    {
        employee_id: 5,
        firstname: 'Sarah',
        middlename: 'Louise',
        lastname: 'Davis',
        status: 'Working on JO-2222-7-2325',
        create_at: new Date('2021-09-12'),
        last_updated: new Date('2021-09-12')
    },
    {
        employee_id: 6,
        firstname: 'David',
        middlename: 'Edward',
        lastname: 'Miller',
        status: 'Working on JO-2222-8-2326',
        create_at: new Date('2020-05-18'),
        last_updated: new Date('2020-05-18')
    },
    {
        employee_id: 7,
        firstname: 'Jessica',
        middlename: 'Ann',
        lastname: 'Wilson',
        status: 'Working on JO-2222-9-2327',
        create_at: new Date('2022-04-22'),
        last_updated: new Date('2022-04-22')
    },
    {
        employee_id: 8,
        firstname: 'Robert',
        middlename: 'Lee',
        lastname: 'Moore',
        status: 'Working on JO-2222-10-2328',
        create_at: new Date('2021-01-07'),
        last_updated: new Date('2021-01-07')
    },
    {
        employee_id: 9,
        firstname: 'Emily',
        middlename: 'Grace',
        lastname: 'Taylor',
        status: 'Working on JO-2222-11-2329',
        create_at: new Date('2020-08-19'),
        last_updated: new Date('2020-08-19')
    },
    {
        employee_id: 10,
        firstname: 'Daniel',
        middlename: 'Christopher',
        lastname: 'Anderson',
        status: 'Working on JO-2222-12-2330',
        create_at: new Date('2022-07-30'),
        last_updated: new Date('2022-07-30')
    },
    {
        employee_id: 1,
        firstname: 'Claire',
        middlename: 'Mid',
        lastname: 'Dia',
        status: 'Working on JO-2222-3-2321',
        create_at: new Date('2020-02-21'),
        last_updated: new Date('2020-02-21')
	},
    {
        employee_id: 2,
        firstname: 'John',
        middlename: 'Patrick',
        lastname: 'Smith',
        status: 'Working on JO-2222-4-2322',
        create_at: new Date('2021-03-15'),
        last_updated: new Date('2021-03-15')
    },
    {
        employee_id: 3,
        firstname: 'Alice',
        middlename: 'Marie',
        lastname: 'Johnson',
        status: 'Working on JO-2222-5-2323',
        create_at: new Date('2021-06-01'),
        last_updated: new Date('2021-06-01')
    },
    {
        employee_id: 4,
        firstname: 'Michael',
        middlename: 'James',
        lastname: 'Brown',
        status: 'Working on JO-2222-6-2324',
        create_at: new Date('2020-11-10'),
        last_updated: new Date('2020-11-10')
    },
    {
        employee_id: 5,
        firstname: 'Sarah',
        middlename: 'Louise',
        lastname: 'Davis',
        status: 'Working on JO-2222-7-2325',
        create_at: new Date('2021-09-12'),
        last_updated: new Date('2021-09-12')
    },
    {
        employee_id: 6,
        firstname: 'David',
        middlename: 'Edward',
        lastname: 'Miller',
        status: 'Working on JO-2222-8-2326',
        create_at: new Date('2020-05-18'),
        last_updated: new Date('2020-05-18')
    },
    {
        employee_id: 7,
        firstname: 'Jessica',
        middlename: 'Ann',
        lastname: 'Wilson',
        status: 'Working on JO-2222-9-2327',
        create_at: new Date('2022-04-22'),
        last_updated: new Date('2022-04-22')
    },
    {
        employee_id: 8,
        firstname: 'Robert',
        middlename: 'Lee',
        lastname: 'Moore',
        status: 'Working on JO-2222-10-2328',
        create_at: new Date('2021-01-07'),
        last_updated: new Date('2021-01-07')
    },
    {
        employee_id: 9,
        firstname: 'Emily',
        middlename: 'Grace',
        lastname: 'Taylor',
        status: 'Working on JO-2222-11-2329',
        create_at: new Date('2020-08-19'),
        last_updated: new Date('2020-08-19')
    },
    {
        employee_id: 10,
        firstname: 'Daniel Last',
        middlename: 'Christopher',
        lastname: 'Anderson',
        status: 'Working on JO-2222-12-2330',
        create_at: new Date('2022-07-30'),
        last_updated: new Date('2022-07-30')
    }
];
export const ActivityLogData: ActivityLogs[] = [
    {
        activitylogs_id: 1,
        fullname: "Christopher, Daniel",
        action: "Logged in",
        create_at: new Date('2022-07-30'),
    },
    {
        activitylogs_id: 2,
        fullname: "Alice Johnson",
        action: "Requested leave",
        create_at: new Date('2022-08-01'),
    },
    {
        activitylogs_id: 3,
        fullname: "John Smith",
        action: "Created JO",
        create_at: new Date('2022-08-03'),
    },
    {
        activitylogs_id: 4,
        fullname: "Sarah Davis",
        action: "Logged in",
        create_at: new Date('2022-08-05'),
    },
    {
        activitylogs_id: 5,
        fullname: "Michael Brown",
        action: "Accepted a JO",
        create_at: new Date('2022-08-07'),
    },
    {
        activitylogs_id: 6,
        fullname: "Jessica Wilson",
        action: "Logged in",
        create_at: new Date('2022-08-10'),
    },
    {
        activitylogs_id: 7,
        fullname: "David Miller",
        action: "Logged in",
        create_at: new Date('2022-08-12'),
    },
    {
        activitylogs_id: 8,
        fullname: "Emily Taylor",
        action: "Requested leave",
        create_at: new Date('2022-08-14'),
    },
    {
        activitylogs_id: 9,
        fullname: "Robert Moore",
        action: "Logged in",
        create_at: new Date('2022-08-16'),
    },
    {
        activitylogs_id: 10,
        fullname: "Claire Dia",
        action: "Created JO",
        create_at: new Date('2022-08-18'),
    },
    {
        activitylogs_id: 11,
        fullname: "Daniel Anderson",
        action: "Logged in",
        create_at: new Date('2022-08-20'),
    },
    {
        activitylogs_id: 12,
        fullname: "John Smith",
        action: "Accepted a JO",
        create_at: new Date('2022-08-22'),
    },
    {
        activitylogs_id: 13,
        fullname: "Alice Johnson",
        action: "Logged in",
        create_at: new Date('2022-08-24'),
    },
    {
        activitylogs_id: 14,
        fullname: "Sarah Davis",
        action: "Created JO",
        create_at: new Date('2022-08-26'),
    },
    {
        activitylogs_id: 15,
        fullname: "Michael Brown",
        action: "Logged in",
        create_at: new Date('2022-08-28'),
    },
    {
        activitylogs_id: 16,
        fullname: "Jessica Wilson",
        action: "Requested leave",
        create_at: new Date('2022-08-30'),
    },
    {
        activitylogs_id: 17,
        fullname: "David Miller",
        action: "Logged in",
        create_at: new Date('2022-09-01'),
    },
    {
        activitylogs_id: 1,
        fullname: "Christopher, Daniel",
        action: "Logged in",
        create_at: new Date('2022-07-30'),
    },
    {
        activitylogs_id: 2,
        fullname: "Alice Johnson",
        action: "Requested leave",
        create_at: new Date('2022-08-01'),
    },
    {
        activitylogs_id: 3,
        fullname: "John Smith",
        action: "Created JO",
        create_at: new Date('2022-08-03'),
    },
    {
        activitylogs_id: 4,
        fullname: "Sarah Davis",
        action: "Logged in",
        create_at: new Date('2022-08-05'),
    },
    {
        activitylogs_id: 5,
        fullname: "Michael Brown",
        action: "Accepted a JO",
        create_at: new Date('2022-08-07'),
    },
    {
        activitylogs_id: 6,
        fullname: "Jessica Wilson",
        action: "Logged in",
        create_at: new Date('2022-08-10'),
    },
    {
        activitylogs_id: 7,
        fullname: "David Miller",
        action: "Logged in",
        create_at: new Date('2022-08-12'),
    },
    {
        activitylogs_id: 8,
        fullname: "Emily Taylor",
        action: "Requested leave",
        create_at: new Date('2022-08-14'),
    },
    {
        activitylogs_id: 9,
        fullname: "Robert Moore",
        action: "Logged in",
        create_at: new Date('2022-08-16'),
    },
    {
        activitylogs_id: 10,
        fullname: "Claire Dia",
        action: "Created JO",
        create_at: new Date('2022-08-18'),
    },
    {
        activitylogs_id: 11,
        fullname: "Daniel Anderson",
        action: "Logged in",
        create_at: new Date('2022-08-20'),
    },
    {
        activitylogs_id: 12,
        fullname: "John Smith",
        action: "Accepted a JO",
        create_at: new Date('2022-08-22'),
    },
    {
        activitylogs_id: 13,
        fullname: "Alice Johnson",
        action: "Logged in",
        create_at: new Date('2022-08-24'),
    },
    {
        activitylogs_id: 14,
        fullname: "Sarah Davis",
        action: "Created JO",
        create_at: new Date('2022-08-26'),
    },
    {
        activitylogs_id: 15,
        fullname: "Michael Brown",
        action: "Logged in",
        create_at: new Date('2022-08-28'),
    },
    {
        activitylogs_id: 16,
        fullname: "Jessica Wilson",
        action: "Requested leave",
        create_at: new Date('2022-08-30'),
    },
    {
        activitylogs_id: 17,
        fullname: "David Miller",
        action: "Logged in",
        create_at: new Date('2022-09-01'),
    }
];
