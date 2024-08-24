import { z } from "zod";

export const CreateEmployeeSchema = z.object({
    // Employee General
    employee_id : z.string().min(1),
    firstname: z.string().min(1),
    middlename: z.string().min(1),
    lastname: z.string().min(1),
    
    // Personal Information
    birthday: z.string().min(1),
    gender: z.string().min(1),
    
    phone: z.string().min(1),
    email: z.string().email().min(1),
    
    // Contact Information
    addressLine: z.string().min(1),
    postalCode : z.string().min(1),

    // Employment
    department_id : z.string().min(1),
    designation_id : z.string().min(1),
    employee_type: z.string().min(1),
    employee_status: z.string().min(1),
    
    // Salary
    payroll_frequency: z.string().min(1),
    base_salary: z.string().min(1),
    
    pagibig_id : z.string().min(1),
    sssid: z.string().min(1),
    philhealth_id: z.string().min(1),
    tin_id: z.string().min(1) 
})  