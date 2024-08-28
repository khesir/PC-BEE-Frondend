
import { ApiResponse, request} from "@/api/axios";
import { Employee, EmployeeEmploymentInformation, EmployeeIdentificationFinancialInformation, EmployeePersonalInformation, EmployeeSalaryInformation } from "../types/types";


export async function getAllEmployee(){
    try{
        const response = await request<ApiResponse<Employee>>('GET', '/ems/employee/')
        return response.data
    } catch (error){
        console.log('Error sending data: ', error);
    }
}


export async function CreateEmployeeIdentificationFinancialInformation(data: EmployeeIdentificationFinancialInformation){
    try{
        const response = await request('POST', '/ems/employee/idenficationFinancialInformation/', data)
        
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

export async function CreateSalaryInformation(data: EmployeeSalaryInformation){
    try{
        const response = await request('POST', '/ems/employee/salaryInformation/', data)
        
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

export async function CreateEmploymentInformation(data: EmployeeEmploymentInformation){
    try{
        const response = await request('POST', '/ems/employee/employmentInformation/', data)
        
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

export async function CreateEmployeePersonalInformation(data: EmployeePersonalInformation){
    try{
        const response = await request('POST', '/ems/employee/personalInformation/', data)
        
        console.log(response)
    } catch(error){
        console.log(error)
    }
}
export async function AddEmployee(data : Employee){
    try{
        const response = await request<ApiResponse<Employee>>('POST', '/ems/employee/', data)
        
        return response.data
    } catch (error) {
        console.log('Error sending data: ', error )
    }
}

